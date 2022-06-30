require("dotenv").config();
const path = require("path");
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')

const app = express();
const PORT = process.env.PORT || 5000;

const whitelist = [
  'http://localhost:3000',
  `http://localhost:${PORT}`,
  'https://darrrbs.trenere.com'
];
const corsConfig = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin)
      callback(null, true)
    else
      callback(new Error('Not allowed by CORS. This is the error'))
  },
  credentials: true
}

app.use(express.json());
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(cors(corsConfig));
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://darrrbs.trenere.com")
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static('client/build'));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', "index.html"))
})

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
})