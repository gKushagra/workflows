var express = require('express');
var path = require('path');
var router = express.Router();

const viewFilePath = path.resolve(__dirname + '/../www/index.html');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(viewFilePath);
});

module.exports = router;
