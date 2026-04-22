import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createLead, getLeads, deleteLead, updateLeadStatus } from "../controllers/leadController.js";

const router = express.Router();

// Mounted at /api/leads, so these paths are relative to that base

// POST /api/leads - Public endpoint to create a lead from site forms
router.post("/", createLead);

// GET /api/leads/ping - Simple ping to verify router mount
router.get("/ping", (req, res) => {
  res.json({ ok: true, message: "Leads route working" });
});

// GET /api/leads - Protected fetch for admin
router.get("/", protect, getLeads);

// DELETE /api/leads/:id - Protected delete lead
router.delete("/:id", protect, deleteLead);

// PUT /api/leads/:id - Protected update lead status
router.put("/:id", protect, updateLeadStatus);

export default router;
