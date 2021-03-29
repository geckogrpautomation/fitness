// Requiring path to so we can use relative routes to our HTML files
const mongoose = require("mongoose");
let {Workout} = require('../models/mongo');
const path = require("path");
console.dir(Workout);

function getFormDate(){
  var today = new Date(Date.now());
  return today.toISOString();
}


module.exports = function(app) {


  app.get("/api/workouts", (req, res) => {

    Workout.find({}).then( data =>
      res.json(data)
    )  

  });

  app.get("/api/workouts/range", (req, res) => {

    Workout.find({}).then( data =>
      res.json(data)
    )  

  });

  

  app.put("/api/workouts/:id", (req, res) => {   
  
    let arr = [];
    arr.push(req.body);
    
    
    Workout.updateOne({_id : req.params.id} , {day : getFormDate() ,  $push: {exercises : arr}}).then( data =>{

      console.dir("res.json --> " , res.json);
      res.json(data);
     

    })  

  });

   
  app.post("/api/workouts", (req, res) => {   
  
    let arr = [];
   
    Workout.create({day : getFormDate() , exercises : arr}).then( data =>
      res.json(data)
    )  
  });




}//End module exports.

