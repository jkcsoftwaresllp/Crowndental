import bcrypt from "bcrypt";
import User from "../models/user.js";

const seedAdmin = async () => {
  try {
    const adminEmail = process.env.ADMIN_EMAIL || "admin@gmail.com";
    const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
    
    // Check if admin user already exists
    const existingAdmin = await User.findOne({ email: adminEmail });
    
    if (existingAdmin) {
      // Reset existing admin password
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      existingAdmin.password = hashedPassword;
      await existingAdmin.save();
      
      console.log("🔄 Admin password has been RESET!");
      console.log("================================");
      console.log(`📧 Email: ${adminEmail}`);
      console.log(`🔑 Password: ${adminPassword}`);
      console.log("================================");
      console.log("⚠️  Use these credentials to login to admin panel");
      return;
    }

    // Create new admin user if doesn't exist
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    
    const adminUser = new User({
      email: adminEmail,
      password: hashedPassword
    });

    await adminUser.save();
    
    console.log("🎉 Admin user created successfully!");
    console.log("===================================");
    console.log(`📧 Email: ${adminEmail}`);
    console.log(`🔑 Password: ${adminPassword}`);
    console.log("===================================");
    console.log("⚠️  Use these credentials to login to admin panel");
    
  } catch (error) {
    console.error("❌ Error with admin user:", error.message);
  }
};

export default seedAdmin;