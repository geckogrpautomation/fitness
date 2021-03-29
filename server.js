const express = require('express');
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/api-routes")(app);
require("./routes/html-routes")(app);


mongoose.connect(
  process.env.MONGODB_URI || 'mongodb+srv://monash:94A0dkhaahcOhh2r@cluster0.gjxzc.mongodb.net/fitnesstracker?retryWrites=true&w=majority',  {
    useNewUrlParser: true,    
    useUnifiedTopology:true
}).then(
    
    app.listen(PORT, function() {
      console.log(`Now listening on port: ${PORT}`);
    })
 
  );






