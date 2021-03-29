export const mongoose = require("mongoose");
export function monConnect(){

    return mongoose.connect(
        process.env.MONGODB_URI || 'mongodb+srv://monash:94A0dkhaahcOhh2r@cluster0.gjxzc.mongodb.net/fitnesstracker?retryWrites=true&w=majority',  {
            useNewUrlParser: true,
            useFindAndModify: true,
            useUnifiedTopology:true
    })   

}

