var express = require('express');
var router = express.Router();

/* GET calculator page. */
router.get('/', function(req, res, next) {
  res.render('calculator/index', { title: '計算機' });
});

module.exports = router;
