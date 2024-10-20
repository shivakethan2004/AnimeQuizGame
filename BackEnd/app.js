const express = require("express");
const cors = require('cors');
const app = express();
const path = require('path');
const connectDP = require("./db/connect");
require("dotenv").config();
const questions = require('./routes/questions');

// Enable CORS for all routes
app.use(cors());

app.use(express.json());

// Define your routes after setting up CORS
app.use('/api/v1/questions', questions);

// Start the server
const start = async () => {
  try {
    await connectDP(process.env.MONGO_URI);
  
    app.listen(5000, () => {
      console.log("Server is running on port 5000");
    });
  } catch (error) {
    console.log("Connection error:", error);
  }
};

start();
