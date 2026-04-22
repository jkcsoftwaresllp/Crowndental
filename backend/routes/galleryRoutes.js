import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getGallery, addGallery, deleteGallery } from "../controllers/galleryController.js";

const router = express.Router();

// Mounted at /api/gallery, so these paths are relative to that base

// GET /api/gallery - Public gallery fetch
router.get("/", getGallery);

// POST /api/gallery - Protected gallery add
router.post("/", protect, addGallery);

// DELETE /api/gallery/:id - Protected gallery delete
router.delete("/:id", protect, deleteGallery);

export default router;
