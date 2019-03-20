const express = require('express');
const Checker = require('repeat-checker');

const router = express.Router();
const checker = new Checker();

router.get('/', (req, res) => {
  if (!checker.checkAndSet('index', 1000)) {
    throw new Error('must call it after 1 second');
  }
  res.render('index', {
    title: 'repeat-checker demo',
  });
});

module.exports = router;
