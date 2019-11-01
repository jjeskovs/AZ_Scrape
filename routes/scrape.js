// getting the models 
var db = require("../models");
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// packages we need to do the Scraping 
const axios = require("axios");
const cheerio = require("cheerio");

module.exports = function(app) {
    
    app.get("/scrape", function(req, res){
        
        axios.get("https://andrewzimmern.com").then(function(response) {

            var $ = cheerio.load(response.data);
            
            $(".recipes").each(function(i, element) {
                
                const result = {};

                result.title = $(element).children("h2").text();
                result.link = $(element).children("a").attr("href");
                result.img = $(element).children(".img-holder").children("img").attr("src");

                // Save these results in an object that we'll push into the results array we defined earlier
                db.Article.create(result)
                    .then(function(data){
                        // View the added result in the console
                        console.log(data);
                    })
                    .catch(function(err){
                        console.log(err);
                    });
            });
            
            res.send("Scrape Completed")
            
        });
        // Log the results once you've looped through each of the elements found with cheerio
    });
};








