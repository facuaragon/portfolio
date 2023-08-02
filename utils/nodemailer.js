// import nodeMailer from "nodemailer";

// export default async function createMail({
//   firstName,
//   lastName,
//   email,
//   phone,
//   message,
// }) {
//   let transporter = nodeMailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL,
//       pass: process.env.PASSWORD,
//     },
//   });

//   // Configurar el contenido del correo electrónico
//   let mailMsg = {
//     from: process.env.EMAIL,
//     to: "facundo_aragon@hotmail.com",
//     subject: "te han contactado desde el Portfolio",
//     html: `
//       <html>
//       <head>
//         <style>
//           body {
//             font-family: Arial, sans-serif;
//           }

//           .container {
//             max-width: 600px;
//             margin: 0 auto;
//             padding: 20px;
//             border: 1px solid #ccc;
//             border-radius: 5px;
//             background-color: #f7f7f7;
//           }

//           p {
//               margin-bottom: 10px;
//           }

//           .message {
//               font-weight: bold;
//               margin-top: 20px;
//           }

//           .banner {
//             max-width: 600px;
//             margin: 0 auto;
//             padding: 15px;
//             border: 1px solid #ccc;
//             border-radius: 5px;
//             background-color:  rgb(48, 162, 238);
//           }
//           .datos {
//               max-width: 600px;
//             margin: 0 auto;
//             padding: 15px;
//             border: 1px solid #ccc;
//             border-radius: 5px;
//             background-color: white;

//           }
//           .titulo {
//               font-family: Helvetica, sans-serif;
//               color:white
//           }

//         </style>
//       </head>
//       <body>
//         <div class="container">
//           <div class="banner">
//               <h1 class="titulo">PORTFOLIO PERSONAL</h1>
//           </div>
//           <p>First and Last Name: ${firstName} ${lastName}</p>
//           <p>Email: ${email}</p>
//           <p>Phone number: ${phone}</p>
//           <p>Message:</p>
//           <div class="datos">
//               <p class="message">${message}</p>
//           </div>
//         </div>
//       </body>
//     </html>
//     `,
//   };

//   // Enviar el correo electrónico
//   transporter.sendMail(mailMsg, (error, info) => {
//     if (error) {
//       console.log("Error al enviar el correo electrónico");
//     } else {
//       console.log("Correo electrónico enviado");
//     }
//   });
// }
