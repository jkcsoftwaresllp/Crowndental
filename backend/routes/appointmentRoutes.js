import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createAppointment,
  getAppointments,
  deleteAppointment,
  updateStatus,
} from "../controllers/appointmentController.js";

const router = express.Router();

// Mounted at /api/appointments, so these paths are relative to that base

// POST /api/appointments - Public endpoint to create an appointment
router.post("/", createAppointment);

// GET /api/appointments/ping - Health check for routing/debugging
router.get("/ping", (req, res) => {
  res.json({ ok: true, message: "Appointments route working" });
});

// GET /api/appointments - Protected fetch all appointments
router.get("/", protect, getAppointments);

// DELETE /api/appointments/:id - Protected delete appointment
router.delete("/:id", protect, deleteAppointment);

// PUT /api/appointments/:id - Protected update appointment status
router.put("/:id", protect, updateStatus);

export default router;
