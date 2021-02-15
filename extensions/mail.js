"use strict";
const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function main(body) {
  // Generate test SMTP service account from ethereal.email
  console.log(body, "inside main");
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "band.nomad3@gmail.com", // generated ethereal user
      pass: "piajhtfvzfuhxaiy", // generated ethereal password
    },
  });
  let html =
    "<p>Name: " +
    body.name +
    "</p>" +
    "<p>Band Name: " +
    body.bandName +
    "</p>" +
    "<p>Genre: " +
    body.genre +
    "</p>" +
    "<p>Email: " +
    body.email +
    "</p>" +
    "<p>Phone: " +
    body.phone +
    "</p>" +
    "<p>Message: " +
    body.message +
    "</p>";

  let text =
    "Name: " +
    body.name +
    "\n" +
    "Band Name: " +
    body.bandName +
    "\n" +
    "Genre: " +
    body.genre +
    "\n" +
    "Email: " +
    body.email +
    "\n" +
    "Phone: " +
    body.phone +
    "\n" +
    "Message: " +
    body.message +
    "\n";

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Band Nomad 👻" <band.nomad3@gmail.com>', // sender address
    to: "martin.tara117@gmail.com, tmartin@rockdale.k12.ga.us", // list of receivers
    subject: "A user from Band Nomad is reaching out!", // Subject line
    text, // plain text body
    html, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = main;
