import nodemailer from "nodemailer";

export default async (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: "facundo_aragon@hotmail.com",
      subject: `Contact from Personal Porfolio ${firstName} ${lastName}`,
      html: `
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
          }

          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #f7f7f7;
          }

          p {
              margin-bottom: 10px;
          }

          .message {
              font-weight: bold;
              margin-top: 20px;
          }

          .banner {
            max-width: 600px;
            margin: 0 auto;
            padding: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color:  rgb(48, 162, 238);
          }
          .datos {
              max-width: 600px;
            margin: 0 auto;
            padding: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: white;

          }
          .titulo {
              font-family: Helvetica, sans-serif;
              color:white
          }

        </style>
      </head>
      <body>
        <div class="container">
          <div class="banner">
              <h1 class="titulo">PORTFOLIO PERSONAL</h1>
          </div>
          <p>First and Last Name: ${firstName} ${lastName}</p>
          <p>Email: ${email}</p>
          <p>Phone number: ${phone}</p>
          <p>Message:</p>
          <div class="datos">
              <p class="message">${message}</p>
          </div>
        </div>
      </body>
    </html>
    `,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};
