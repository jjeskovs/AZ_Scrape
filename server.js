const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
var exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;
const app = express();

// required code to deploy to heroku 
// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/cookBook";
// mongoose.connect(MONGODB_URI);

// using morgan logger for logging requests
app.use(logger("dev"));

// making req body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Making public static folder
app.use(express.static("public"));

//connecting to Mongo DB ask if should keep or the heroku one will cover this
mongoose.connect("mongodb://localhost/cookBook", { userNewUrlParser: true});


// Set Handlebars.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



// require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app);
require("./routes/scrape.js")(app);



app.listen(PORT, function() {
    console.log(`App is running on port ${PORT}!`);
})







