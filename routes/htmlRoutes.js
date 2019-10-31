const db = require("../models");

module.exports = function(app){
    // to display all unsaved articles 
    app.get("/", function(req, res){
        db.Article.find({saved: false})
        .then(function(data){
            res.render("index", {article: data});
            // res.json(data)
        })
        .catch(function(err){
            res.json(err);
        })

        });

    // to display all saved articles 
    app.get("/saved", function(req, res){
        db.Article.find({saved: true})
        .then(function(data) {
            res.render("saved", {article: data})
        })
        .catch(function(err){
            res.json(err);
        })
    });
    //to display all saved and unsaved articles 
    app.get("/all", function(req, res){
        db.Article.find({})
        .then(function(data) {
            res.json(data);
        })
        .catch(function(err){
            res.json(err);
        })
    });
    

    // // you guessed right, we are deleting  
    // app.delete("/article/:id", function(req, res){
    //     db.Article.deleteOne({ _id: req.params.id}, function(err, data){
    //         if(err){
    //             res.status(500).end();
    //         }
    //         res.json(data)
    //     });
    // });
    // // here we will toggle the switch on saved property
    // function updateArticle(saved, req, res){
    //     db.Article.findOneAndUpdate({ _id: req.params.id}, {saved: saved}, {new: true}, function(err, data){
    //         if(err){
    //             res.status(500).end();
    //         }
    //         res.json(data);
    //     });
    // }

    // app.put("/marksaved/:id", function(req, res){
    //     db.updateArticle(true, req, res)
    // })
    
    // app.put("/markunsaved/:id", function(req, res){
    //     db.updateArticle(false, req, res)
    // })

}