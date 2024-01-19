const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require("dotenv").config();
const path = require('path');
const multer = require('multer');



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


  // Error handling middleware
  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error!';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });

//   Image storage by using multer
const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file, cd)=>{
        return cd(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
}) 

const upload = multer({storage:storage})



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


  // Adding Schema to store data Img for admin...
  



//   Applying APIs routes
app.use('/images', express.static('upload/images'));
app.post('/upload', upload.single('product'), (req,res)=>{
    res.json({
        success:1,
        profile_url:`http://localhost:5000/upload/images/${req.file.filename}`
    })
})