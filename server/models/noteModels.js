const mongoose = require('mongoose');
const URI = require('./URIS/MONG_URI');

const MONGO_URI = URI;

mongoose
  .connect(MONGO_URI, {
    // options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets the name of the DB that our collections are part of
    dbName: 'imagenotes',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const NotesSchema = new Schema({
  title: { type: String, required: true },
  note: String,
  objectID: Number,
  primaryImage: String,
  primaryImageSmall: String,
  department: String,
  objectDate: String,
  dimensions: String,
  medium: String,
  artistDisplayName: String,
});

const Note = mongoose.model('note', NotesSchema);

module.exports = Note;
