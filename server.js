// express ko require kiya or import kiya  express mai ya node js
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");


// dotenv ko import kra
const dotenv = require("dotenv");
//dorenv config
// TODO : In Dotenv file we use MONGO_URI = mongodb://localhost:27017/database-name
dotenv.config();
 

//import connect
// use path to configdb file inside config folder
const connectDb = require("./config/configdb");
//connecting to mongodb database
connectDb();


const app = express();


// anonymous function
const PORT = 8080;
app.listen(process.env.PORT || PORT, () => {
  console.log(
    `server running ${process.env.NODE_ENV} Mode On Port ${process.env.PORT}`
  );
});

// install this command => npm i axios
