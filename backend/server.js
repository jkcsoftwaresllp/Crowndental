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

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

dotenv.config();

// Connect to database and seed admin user
const initializeApp = async () => {
  await connectDB();
  await seedAdmin();
};

initializeApp();

const app = express();

app.use(cors());
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




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
