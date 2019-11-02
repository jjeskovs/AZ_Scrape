const db = require("../models");

module.exports = function(app) {
  // to display all unsaved articles
  app.get("/", function(req, res) {
    db.Article.find({ saved: false })
      .then(function(data) {
        res.render("index", { article: data });
        // res.json(data)
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // to display all saved articles
  app.get("/saved", function(req, res) {
    db.Article.find({ saved: true })
    .populate("note")  
    .then(function(data) {
        res.render("saved", { article: data });
      })
      .catch(function(err) {
        res.json(err);
      });
  });


  //to display all saved and unsaved articles
  app.get("/all", function(req, res) {
    db.Article.find({})
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        res.json(err);
      });
  });

  // you guessed right, we are deleting
  app.delete("/article/:id", function(req, res) {
    db.Article.deleteOne({ _id: req.params.id }, function(err, data) {
      if (err) {
        res.status(500).end();
      }
      res.json(data);
    });
  });

  app.put("/marksaved/:id", function(req, res) {
    //    var saved = true;
    //    updateArticle(true, req, res)
    db.Article.findOneAndUpdate(
      { _id: req.params.id },
      { saved: true },
      { new: true }
    )
      .then(function(data) {
        res.json(data);
      })
      .catch(function(err) {
        res.status(500).end();
      });
  });

  // all above is working I hope :)


  // Route for saving a new Note to the db and associating it with a User
  app.get("/articles/:id", function(req, res) {
    // Using the id passed in the id parameter, prepare a query that finds the matching one in our db...
    db.Article.findOne({ _id: req.params.id })
      // ..and populate all of the notes associated with it
      
        .populate("note")
        .then(function(dbArticle) {
            // If we were able to successfully find an Article with the given id, send it back to the client
            res.json(dbArticle);
        })
        .catch(function(err) {
            // If an error occurred, send it to the client
            res.json(err);
        });
});

app.post("/articles/:id", function(req, res) {
    console.log("hello", req.body)
    // Create a new note and pass the req.body to the entry
    db.Note.create(req.body)
      .then(function(dbNote) {
        // If a Note was created successfully, find one Article with an `_id` equal to `req.params.id`. Update the Article to be associated with the new Note
        // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
        // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
        return db.Article.findOneAndUpdate({ _id: req.params.id }, { note: dbNote._id }, { new: true });
      })
      .then(function(dbArticle) {
        // If we were able to successfully update an Article, send it back to the client
        res.json(dbArticle);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });
};
