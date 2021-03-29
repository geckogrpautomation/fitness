const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({

  date: {
    type: Date
    
  },
  exercises: {
    type: Array
  }
 
});

let Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = {Workout};
