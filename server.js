require("dotenv").config();
const path = require("path");
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser')
const ExerciseModel = require("./Models/Exercise")

const app = express();
const PORT = process.env.PORT || 5000;

const whitelist = [
  'http://localhost:3000',
  `http://localhost:${PORT}`,
  'https://trenere.herokuapp.com'
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
    : "https://trenere.herokuapp.com")
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.static('client/build'));

app.post("/api/upload-exercise", (req, res) => {
  mongoose.connect(
    process.env.ATLAS_URI,
    {},
    (err) => {
      if (err) {
        console.log(err)
        res.json(err)
      } else {
        const { ul, group, main_mm, secondary_mm, equipment, phys_a } = req.body
        const exercise = { ul, group, main_mm, secondary_mm, equipment, phys_a }
        const newExercise = new ExerciseModel(exercise);
        newExercise.save()
          .then(() => res.json(`Exercise "${newExercise.ul}" saved to db succesfully!`))
          .catch(err => res.status(400).json(`Error while saving exercise! \n${err}`))
      };
    }
  );
})
app.delete("/api/delete-exercise", (req, res) => {
  mongoose.connect(
    process.env.ATLAS_URI,
    {},
    (err) => {
      if (err) {
        console.log(err)
        res.json(err)
      } else {
        ExerciseModel.findByIdAndDelete(req.body._id)
          .then(data => res.json("Exercise deleted succesfully"))
          .catch(err => `Error +_+: ${err}`);
      };
    }
  );
})

app.get("/api/get-all-exercises", (req, res) => {
  console.log(req.query)
  const limit = parseInt(req.query.limit);
  const offset = parseInt(req.query.offset);

  mongoose.connect(
    process.env.ATLAS_URI,
    {},
    async (err) => {
      if (err) {
        console.log(err)
        res.json(err)
      } else {
        const documentCount = await ExerciseModel.countDocuments()
        ExerciseModel.find().limit(limit).skip(offset)
          .then(data => res.json({
            data, documentCount
          }))
          .catch(err => res.status(400).json(`error while retrieving exercise data: \n${err}`))
      }
    }
  );
})

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', "index.html"))
})

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`)
})
