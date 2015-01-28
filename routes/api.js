var express = require('express');

var callback = require('../middlewares/WechatCallback');

var router = express.Router();

/* GET home page. */
router.all('/callback', callback);

module.exports = router;
