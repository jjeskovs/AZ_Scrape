const db = require("../models");

module.exports = function(app){
    app.get("/", function(req, res){
        db.Article.find({saved: false}, function(err, data){
            if (err) {
                return res.status(500).end();
            }
            res.render("index", {article: data});
        });
    });

    app.get("/saved", function(req, res){
        db.Article.find({saved: true}, function(err, data){
            if(err){
                return res.status(500).end();
            }
            res.render("saved", {article: data})
        });
    });

    app.get("/all" function(req, res){
        db.Article.find({}, function(err, data){
            if(err){
                res.status(500).end();
            }
            res.json(data);
        })
    })

}