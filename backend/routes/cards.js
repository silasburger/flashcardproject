const express = require('express');
const router = new express.Router();
const Card = require('../models/Card');

/**
 * GET / => {cards: [{}]}
 */
router.get('/', async function(req, res, next) {
  try {
    const cards = await Card.getAll();
    return res.json({cards});
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
