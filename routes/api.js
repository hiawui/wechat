var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('/callback', function(req, res, next) {
	req.debug('query='+JSON.stringify(req.query));
	req.debug('body='+JSON.stringify(req.body));
	var result = '';
	if (req.query.echostr)
		result = req.query.echostr;
	res.end(result);
});

module.exports = router;
