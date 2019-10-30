const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// packages we need to do the Scraping 
const axios = require("axios");
const cheerio = require("cheerio");

// getting the models 
const db = require("/models");

const PORT = process.env.PORT || 8080;
const app = express();

// using morgan logger for logging requests
app.use(logger("dev"));

// making req body as JSON
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

// Making public static folder
app.use(express.static("public"));

//connecting to Mongo DB
mongoose.connect("mongodb://localhost/cookBook", { userNewUrlParser: true});

app.listen(PORT, function() {
    console.log(`App is running on port ${PORT}!`);
})







