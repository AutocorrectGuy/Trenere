require("dotenv").config();
const path = require("path");
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')

const CategoryModel = require("./mongodb/models/Categories")

const DB_KEYS = {
  categories: "62b648d0913b1d03da4f9459"
}

const app = express();
const PORT = process.env.PORT || 5000;

const whitelist = [
  'http://localhost:3000',
  `http://localhost:${PORT}`,
  'https://darrrbs.herokuapp.com'
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
    : "https://darrrbs.herokuapp.com")
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static('client/build'));

app.get("/api/categories", (req, res) => {
  CategoryModel.find({ name: req.query.r })
    .then(data => res.json(data))
})

app.get("/api/footer", (req, res) => {
  res.json(require("./db/footer.json"));
})
app.post("/api/updatecategories", (req, res) => {
  CategoryModel.findOneAndUpdate(
    { name: "categories" },
    { data: req.body.jsonString },
    {},
    () => {
      res.json({ "info": "done" });
    })

})

app.post("/api/createcategories", (req, res) => {
  console.log("server responser on creating new entry in db is succesfull");
  const newCategories = new CategoryModel({
    name: 'new name',
    data: 'new placeholder placeholder'
  })
  newCategories.save()
    .then(() => res.json({ "info": "upload succesfull" }))
    .catch(err => res.status(400).json({ "error": err }))
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', "index.html"))
})

mongoose.connect(process.env.ATLAS_URI)
  .then(() => {
    app.listen(PORT, () => { console.log(`Server is up on port ${PORT}!`) });
  });