var express = require('express');
var router = express.Router();

const crown2controller = require('../controller/crown2controller_49');

/* GET home page. */
router.get('/', crown2controller.getHomepage);

router.get('/shop_xx/:product', function (req, res, next) {
  res.render('product_xx', {
    title: 'Hsingtai Chung, 123456789',
    product: req.params.product,
  });
});

module.exports = router;
