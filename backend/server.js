import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import seedAdmin from "./scripts/seedAdmin.js";
import authRoutes from "./routes/authRoutes.js";
import treatmentRoutes from "./routes/treatmentRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import galleryRoutes from "./routes/galleryRoutes.js";
import appointmentRoutes from "./routes/appointmentRoutes.js";
import leadRoutes from "./routes/leadRoutes.js";
import subscriberRoutes from "./routes/subscriberRoutes.js";
import subscriberAdminRoutes from "./routes/subscriberAdminRoutes.js";

// Only disable TLS verification in development
if (process.env.NODE_ENV === 'development') {
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
}

dotenv.config();

const startServer = async () => {
  try {
    // Initialize database and seed admin
    await connectDB();
    await seedAdmin();

    const app = express();

    // CORS configuration for development and production
    const corsOptions = {
      origin: function (origin, callback) {
        // Allow requests with no origin (mobile apps, Postman, etc.)
        if (!origin) return callback(null, true);
        
        const allowedOrigins = [
          'http://localhost:3000',
          'http://localhost:3001', 
          'http://127.0.0.1:3000',
          'https://crown-dental.in',
          'https://www.crown-dental.in'
        ];
        
        // Allow any localhost with any port for development
        if (origin.includes('localhost') || origin.includes('127.0.0.1')) {
          return callback(null, true);
        }
        
        if (allowedOrigins.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization']
    };

    // Middleware
    app.use(cors(corsOptions));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Routes
    app.use("/api/auth", authRoutes);
    app.use("/api/treatments", treatmentRoutes);
    app.use("/api/uploads", uploadRoutes);
    app.use("/api/gallery", galleryRoutes);
    app.use("/api/appointments", appointmentRoutes);
    app.use("/api/leads", leadRoutes);
    app.use("/api", subscriberRoutes);
    app.use("/api/subscribers", subscriberAdminRoutes);

    // Health check endpoint
    app.get("/api/health", (req, res) => {
      res.json({ 
        status: "OK", 
        message: "Crown Dental API is running",
        timestamp: new Date().toISOString()
      });
    });

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`🚀 Crown Dental Server running on port ${PORT}`);
      console.log(`📍 Local: http://localhost:${PORT}`);
      console.log(`🌐 Network: http://0.0.0.0:${PORT}`);
      console.log(`✅ Environment: ${process.env.NODE_ENV || 'development'}`);
    });

  } catch (error) {
    console.error("❌ Server start error:", error);
    process.exit(1);
  }
};

// Start the server
startServer();
