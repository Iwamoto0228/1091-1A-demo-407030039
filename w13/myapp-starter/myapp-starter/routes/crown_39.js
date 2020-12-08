var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('crown_39', { title: 'LiuTaiKang 407030039' });
});

router.get('/shop_39/:product', function(req, res, next) {
  res.render('product_39', {
    title: 'LiuTaiKang 407030039',
    product: req.params.product
  });
});
module.exports = router;
