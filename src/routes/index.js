const express = require('express');
const { MemoryChecker } = require('repeat-checker');

const router = express.Router();
const checker = new MemoryChecker();

router.get('/', (req, res) => {
  if (!checker.checkAndSet('index', 1000)) {
    throw new Error('must call it after 1 second');
  }
  res.render('index', {
    title: 'repeat-checker demo',
  });
});

module.exports = router;
