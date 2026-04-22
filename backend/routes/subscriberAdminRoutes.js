import express from "express";
import Subscriber from "../models/Subscriber.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Mounted at /api/subscribers, so these paths are relative to that base

// GET /api/subscribers - Fetch all subscribers (protected)
router.get("/", protect, async (req, res) => {
  try {
    const list = await Subscriber.find().sort({ date: -1 });
    res.json(list);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
});

// GET /api/subscribers/export/csv - Export subscribers as CSV (protected)
router.get("/export/csv", protect, async (req, res) => {
  try {
    const list = await Subscriber.find().sort({ date: -1 });

    let csv = "Email,Date\n";

    list.forEach(sub => {
      csv += `${sub.email},${sub.date.toISOString()}\n`;
    });

    res.setHeader("Content-Type", "text/csv");
    res.setHeader("Content-Disposition", "attachment; filename=subscribers.csv");
    res.send(csv);

  } catch (err) {
    res.status(500).json({ message: "CSV Export Failed" });
  }
});

export default router;
