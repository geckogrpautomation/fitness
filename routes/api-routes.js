// Requiring path to so we can use relative routes to our HTML files
const mongoose = require("mongoose");
let { Workout } = require("../models/mongo");
const path = require("path");


module.exports = function (app) {
  app.get("/api/workouts", (req, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
     // {$limit : 5}
    ]) .then((data) => {
      console.log(data);
      res.json(data);
    })
    .catch((err) => console.log(err));
  });

  app.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
      {
        $addFields: {
          totalDuration: {
            $sum: "$exercises.duration",
          },
        },
      },
     // {$limit : 5}
    ])
      .then((data) => {
        console.log(data);
        res.json(data);
      })
      .catch((err) => console.log(err));
    // Workout.find({}).then((data) => {
    //   res.json(data);
    // });
  });

  app.put("/api/workouts/:id", (req, res) => {
    let arr = [];
    arr.push(req.body);

    Workout.updateOne(
      { _id: req.params.id },
      { day: new Date(), $push: { exercises: arr } }
    ).then((data) =>    
      res.json(data));
  });

  app.post("/api/workouts", (req, res) => {
    let arr = [];

    Workout.create({ day: new Date(), exercises: arr }).then((data) =>
      res.json(data)
    );
  });
}; //End module exports
