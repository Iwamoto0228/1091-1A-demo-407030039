var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('crown', { title: 'Crown Clothing' });
});

module.exports = router;
