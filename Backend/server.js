const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();



// Applying express app
const app = express();


// Middlewares to parse JSON
app.use(express.json());


// Middlewares to allow CORS
app.use(
    cors({
      origin: [
        "http://localhost:5173",
      ],
      credentials: true,
    })
  );

  // Connecting to MongoDB
const urlmongoDB = process.env.MONGODB_URL;
mongoose
  .connect(urlmongoDB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(5000, () => {
      console.log(
        "Congratulations! Now you are live on MongoDB service at port:",
        5000
      );
    });
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  });