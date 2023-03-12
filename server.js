const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

// Setup server
const app = express();
app.use(express.json());
app.use(cors());

const sendEmail = (requestBody) => {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const { name, number, email, description } = requestBody;

  const msg = {
    to: process.env.EMAIL,
    from: process.env.EMAIL,
    subject: `Request for quote from ${name}`,
    text: `Form contents:
    Name: ${name} 
    Number: ${number} 
    Email: ${email} 
    Desription: ${description}`,
  };

  sgMail
    .send(msg)
    .then(() => console.log("Email sent"))
    .catch((error) => {
      throw new Error(error);
    });
};

// Routes
app.post("/api/v1/email", async (req, res) => {
  const data = {
    name: req.body.name,
    number: req.body.number,
    email: req.body.email,
    description: req.body.description,
  };

  try {
    await sendEmail(data);
    res.sendStatus(200);
    return;
  } catch (error) {
    console.log(error);
  }

  res.sendStatus(500);
});

// Serve statis react app
if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'staging') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
  });
 }

// Start server
let server;
const start = async () => {
  try {
    server = app.listen(process.env.PORT || 4000, () => {
      console.log(`Server up on port ${process.env.PORT || 4000}`);
    });
  } catch (error) {
    console.log(error);
  }
};


start();

process.on("unhandledRejection", (error, promise) => {
  console.log(`Error: ${error.message}`);

  server.close(() => {
    process.exit(1);
  });
});
