const express = require('express');

const noteController = require('../controllers/noteController');
const { Notes } = require('../models/noteModels');

const router = express.Router();

router.get('/notes', noteController.getNotes, (req, res) =>
  res.status(200).json(res.locals.notes)
);

router.post('/notes', noteController.addNote, (req, res) =>
  res.status(200).json(res.locals.newNote)
);

module.exports = router;
