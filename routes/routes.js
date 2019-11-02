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
  app.post("/submit", function(req, res) {
    // Create a new Note in the db
    db.Note.create(req.body)
      .then(function(dbNote) {
        // If a Note was created successfully, find one User (there's only one) and push the new Note's _id to the User's `notes` array
        // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
        // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
        return db.User.findOneAndUpdate(
          {},
          { $push: { notes: dbNote._id } },
          { new: true }
        );
      })
      .then(function(dbUser) {
        // If the User was updated successfully, send it back to the client
        res.json(dbUser);
      })
      .catch(function(err) {
        // If an error occurs, send it back to the client
        res.json(err);
      });
  });

  // Route to get all User's and populate them with their notes
  app.get("/populateduser", function(req, res) {
    // Find all users
    db.User.find({})
      // Specify that we want to populate the retrieved users with any associated notes
      .populate("notes")
      .then(function(dbUser) {
        // If able to successfully find and associate all Users and Notes, send them back to the client
        res.json(dbUser);
      })
      .catch(function(err) {
        // If an error occurs, send it back to the client
        res.json(err);
      });
  });
};
