import nodemailer from "nodemailer";
import NotificationStrategy from "./NotificationStrategy";
import "dotenv/config";

class EmailNotificationStrategy implements NotificationStrategy {
  transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT),
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });
  }

  async sendNotification(to: string, message: string) {
    try {
      await this.transporter.sendMail({
        from: "info@patients.com",
        to,
        subject: "Notification",
        text: message,
      });
    } catch (error) {
      console.error(error);
    }
  }
}

export default EmailNotificationStrategy;
