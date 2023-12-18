// Task5
const task = "task5";
// -----------------

require("dotenv").config();
const nodemailer = require("nodemailer"); //nodemailer library for sending emails

async function mailBox() {
  try {
    // Compose an email using the configured mail transporter
    const mailTransporter = nodemailer.createTransport({
      service: "Yahoo", // email service provider
      auth: {
        user: process.env.EMAIL_USER, //your email username/address
        pass: process.env.EMAIL_PASSWORD, //use app password created on your emaol account
      },
    });

    // composing and sending email logic
    const composeMail = await mailTransporter.sendMail({
      from: process.env.EMAIL_USER, // sender email address
      to: process.env.EMAIL_RECEIVER, //receiver email address
      subject: "Sending mail from Server Side using Node.js",
      html: `<h1>Hey man! Good day</h1> <p>That was easy!</> `,
    });
    // log success mesaages if the email is sent successfully
    console.log("Your email was successfully sent");
    console.log("Message sent: %s", composeMail.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(composeMail));
  } catch (error) {
    // Log an error message if there is an issue sending the emai
    console.error("An error occured while sending your email:", error.message);
  }
}

// invoking the mailbox function
mailBox();
