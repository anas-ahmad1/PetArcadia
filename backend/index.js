const express = require('express')
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/userModel.js");
const app = express();
require('dotenv').config();

const port = 5000

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))


mongoose
  .connect("mongodb://127.0.0.1:27017/PetArcadia")
  .then(() => {
    console.log("MONGO CONNECTION OPEN!!!");
  })
  .catch((err) => {
    console.log("OH NO MONGO CONNECTION ERROR!!!!");
    console.log(err);
  });


  app.use('/users', require('./routes/userRoutes'))

app.listen(port, () => console.log(`Server started on port ${port}`))

