import express from "express";
import { addSubscriber } from "../controllers/subscriberController.js";

const router = express.Router();

// Mounted at /api, so these paths are relative to that base

// POST /api/subscribe - Add a subscriber (public)
router.post("/subscribe", addSubscriber);

export default router;


