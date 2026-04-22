import express from "express";
import {
  createTreatment,
  getAllTreatments,
  getTreatmentById,
  getTreatmentBySlug,
  updateTreatment,
  deleteTreatment,
} from "../controllers/treatmentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Mounted at /api/treatments, so these paths are relative to that base
router.post("/", protect, createTreatment);           // POST /api/treatments
router.get("/", getAllTreatments);                    // GET /api/treatments
router.get("/id/:id", getTreatmentById);              // GET /api/treatments/id/:id
router.get("/:slug", getTreatmentBySlug);             // GET /api/treatments/:slug
router.put("/:id", protect, updateTreatment);         // PUT /api/treatments/:id
router.delete("/:id", protect, deleteTreatment);      // DELETE /api/treatments/:id

export default router;
