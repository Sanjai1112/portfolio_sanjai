// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

require("dotenv").config();

const CONFIG_EMAIL_ACCOUNT = process.env.CONFIG_EMAIL_ACCOUNT;
const CONFIG_PASSWORD = process.env.CONFIG_PASSWORD;
const TO_EMAIL_ACCOUNT = process.env.TO_EMAIL_ACCOUNT;

const transporter = nodemailer.createTransport({
  // service: "gmail",
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: CONFIG_EMAIL_ACCOUNT,
    pass: CONFIG_PASSWORD,
  },
});

type ResponseData = {
  message: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== "POST") {
    res.status(405).end(`Method(${req.method}) not allowed`);
  }

  const errors = [];
  if (!req.body.email) {
    errors.push("Email Id is required");
  }
  if (!req.body.name) {
    errors.push("Name is required");
  }
  if (!req.body.message) {
    errors.push("Mail Message is required");
  }
  if (errors.length > 0) {
    res.status(400).json({ message: errors.join(" , ") });
  }
  const mailData = {
    from: CONFIG_EMAIL_ACCOUNT,
    to: TO_EMAIL_ACCOUNT,
    subject: `Message From ${req.body.email}`,
    // text: `
    //   Hi, I'm ${req.body.name},\n
    //   \t${req.body.message}
    // `,
    html: `
      <div> 
        <div> Hi, I'm ${req.body.name}</div>
        ${req.body.message}
      </div>
    `,
  };
  try {
    const info = await transporter.sendMail(mailData);
    res.status(200).json({
      message: 'Message delivered successfully',
    });
  } catch(err) {
    res.status(500).json({
      message: `Connection refused`,
    });
  }

}
