import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/user.js";

dotenv.config();

const checkAdminUser = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to database");

    // Find all users
    const users = await User.find({});
    
    console.log("📋 All users in database:");
    console.log("========================");
    
    if (users.length === 0) {
      console.log("No users found in database");
    } else {
      users.forEach((user, index) => {
        console.log(`${index + 1}. Email: ${user.email}`);
        console.log(`   ID: ${user._id}`);
        console.log(`   Created: ${user.createdAt || 'N/A'}`);
        console.log("   ---");
      });
    }
    
    process.exit(0);
    
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
};

checkAdminUser();