import express from "express";
import { login, changePassword } from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Mounted at /api/auth, so these paths are relative to that base

// POST /api/auth/login - Public login route
router.post("/login", login);

// PUT /api/auth/change-password - Protected password change route
router.put("/change-password", protect, changePassword);

export default router;
