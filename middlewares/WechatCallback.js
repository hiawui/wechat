var token = 'H1avVUl604aaF576D7f6s7fyhu2i';

var verifySignature = function(signature, timestamp, nonce) {
	var tmp = [token, timestamp, nonce].sort().join('');
	var sha = require('crypto').createHash('sha1').update(tmp);
	if(signature === sha.digest('hex')) {
		return true;
	}
	return false;
};

module.exports = function(req, res, next) {
	req.debug('query='+JSON.stringify(req.query));
	req.debug('body='+JSON.stringify(req.body));
	req.debug('headers='+JSON.stringify(req.headers));
	var result = '';
	if (!verifySignature(req.query.signature, req.query.timestamp, req.query.nonce)) {
		req.debug('signature error');
		res.statusCode = 401;
		res.end();
	}
	req.debug('signature ok');
	res.end(req.query.echostr);
};
