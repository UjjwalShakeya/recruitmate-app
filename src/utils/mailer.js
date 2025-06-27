// importing modules
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load .env variables
dotenv.config();

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
  //   host: "smtp.ethereal.email",
  //   port: 587,
  //   secure: false, // true for 465, false for other ports
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

// Wrap in an async IIFE so we can use await.
export const sendMailConfirmation = async (applicantData) => {
  try {
    const info = await transporter.sendMail({
      from: `Recruitmate`,
      to: applicantData.email,
      subject: "Thanks for Applying – We've Got Your Application!",
      html: `
  <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
    <h2 style="color: #2c3e50;">Thank You for Applying!</h2>
    <p style="font-size: 16px; color: #333;">
      Hi <strong>${applicantData.name}</strong>,
    </p>
    <p style="font-size: 15px; color: #555;">
      We’ve received your application and our team will review your details shortly.
    </p>

    <div style="margin-top: 20px; background-color: #fff; padding: 15px; border: 1px solid #ddd; border-radius: 6px;">
      <h4 style="margin-bottom: 10px; color: #34495e;">Application Summary:</h4>
      <p><strong>Name:</strong> ${applicantData.name}</p>
      <p><strong>Email:</strong> ${applicantData.email}</p>
      <p><strong>Resume Filename:</strong> ${applicantData.resume}</p>
    </div>

    <p style="margin-top: 30px; font-size: 14px; color: #888;">
      If you have any questions, feel free to reply to this email.<br>
      — Ujjwal Shakeya, Job Portal Team
    </p>
  </div>
`,
    });

    console.log("Message sent:", info.messageId);
    return info;
  } catch (err) {
    console.error("Failed to send email:", err);
    throw err;
  }
};
