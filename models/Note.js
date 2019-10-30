const mongoose = require("mongoose");

// Save a reference to the Schema constructor
const Schema = mongoose.Schema;

// create a new NoteSchema object

const NoteSchema = new Schema({

  body: {
    type: String,
  },
  headline: {
    type: Schema.Types.ObjectId,
    ref: "Article"
  }

});
 
// This creates our model from the above schema, using mongoose's model method
var Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;


