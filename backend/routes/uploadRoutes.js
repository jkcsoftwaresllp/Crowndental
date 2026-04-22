import express from "express";
import multer from "multer";
import cloudinary from "../config/cloudinary.js";
import streamifier from "streamifier";

const router = express.Router();
const upload = multer(); // memory storage

// Mounted at /api/uploads, so these paths are relative to that base

// POST /api/uploads/image - Multiple image upload endpoint
router.post("/image", upload.array("file", 20), async (req, res) => {
  try {
    if (!req.files || req.files.length === 0)
      return res.status(400).json({ error: "No files provided" });

    if (
      !process.env.CLOUDINARY_CLOUD_NAME ||
      !process.env.CLOUDINARY_API_KEY ||
      !process.env.CLOUDINARY_API_SECRET
    ) {
      return res.status(500).json({ error: "Cloudinary not configured" });
    }

    // Helper function to upload each file buffer
    const uploadToCloudinary = (fileBuffer) =>
      new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "crowndental" },
          (err, result) => {
            if (err) reject(err);
            else resolve(result.secure_url);
          }
        );
        streamifier.createReadStream(fileBuffer).pipe(stream);
      });

    // Upload all images in parallel
    const uploadedUrls = await Promise.all(
      req.files.map((file) => uploadToCloudinary(file.buffer))
    );

    // Return: if 1 image → { url } ; if multiple → { urls }
    if (uploadedUrls.length === 1) {
      return res.json({ url: uploadedUrls[0] });
    } else {
      return res.json({ urls: uploadedUrls });
    }
  } catch (err) {
    console.error("Cloudinary upload error:", err);
    res.status(500).json({ error: err.message });
  }
});

export default router;

