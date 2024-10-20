// const express = require("express");
// const app = express();
const connectDP = require("./db/connect");
const {Options} = require('./models/schema')
const { options } = require("./db/data");
require("dotenv").config();
const start = async () => {
  try {
    await connectDP("mongodb+srv://shiva:kethanhoney@nodeexpressprojects.y4coe.mongodb.net/AnimeChallenge?retryWrites=true&w=majority");
    await Options.insertMany(options)
  .then((docs) => {
    console.log(`Inserted Level 1 documents:`, docs);
  })
  .catch((err) => {
    console.error("Error inserting Level 1 documents:", err);
  });
   

  } catch (error) {
    console.log("Connection error:", error);
  }
};

start();







