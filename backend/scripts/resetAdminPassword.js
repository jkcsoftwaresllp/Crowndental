import bcrypt from "bcrypt";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/user.js";

dotenv.config();

const resetAdminPassword = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database");

    // Find admin user
    const adminEmail = process.env.ADMIN_EMAIL || "admin@gmail.com";
    const existingAdmin = await User.findOne({ email: adminEmail });
    
    if (!existingAdmin) {
      console.log("❌ Admin user not found");
      
      // Create new admin user
      const newPassword = "admin123";
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      
      const adminUser = new User({
        email: adminEmail,
        password: hashedPassword
      });

      await adminUser.save();
      console.log("🎉 New admin user created!");
      console.log(`📧 Email: ${adminEmail}`);
      console.log(`🔑 Password: ${newPassword}`);
    } else {
      // Reset existing admin password
      const newPassword = "admin123";
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      
      existingAdmin.password = hashedPassword;
      await existingAdmin.save();
      
      console.log("🔄 Admin password reset successfully!");
      console.log(`📧 Email: ${adminEmail}`);
      console.log(`🔑 New Password: ${newPassword}`);
    }
    
    process.exit(0);
    
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
};

resetAdminPassword();