const models = require('../models/starWarsModels');

const noteController = {};

noteController.getNotes = async (req, res, next) => {
  const notes = await models.Note.find({});
  res.locals.notes = notes;
  next();
};

noteController.addNote = (req, res, next) => {
  // write code here
  const { title, note } = req.body;
  models.Note.create({ title, note })
    .then((newNote) => {
      res.locals.newNote = newNote;
      return next();
    })
    .catch((err) =>
      next({
        log: 'Express error caught in noteController.addNote middleware',
        message: {
          err: 'An error occurred in noteController.addNote middleware',
        },
      })
    );
};

module.exports = noteController;
