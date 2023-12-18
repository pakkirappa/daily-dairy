import nodemailer from "nodemailer";
import CONFIG from "../config";

/**
 * @description - nodemailer transporter
 * @returns - nothing
 * instance of nodemailer transporter
 */
const transpoter = nodemailer.createTransport(CONFIG.SMTP_URL, {});

export const sendMail = async (
  to: string,
  subject: string,
  content?: string,
  isHtml = false
) => {
  try {
    await transpoter.sendMail({
      from: "",
      to,
      subject,
      html: isHtml ? content : undefined,
      text: isHtml ? undefined : content,
    });
  } catch (error) {}
};
