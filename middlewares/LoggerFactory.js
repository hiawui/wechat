var debug = require('debug');
var logLevels = ['fatal', 'error', 'warn', 'info', 'debug'];

module.exports = function(logConf) {
	return function(req, res, next) {
		var logger = debug('req');
		var logLevel = logConf.level;
		if('undefined' === logLevel || null === logLevel) {
			logLevel = 'info';
		}
		var log = 1;
		for(var lv in logLevels) {
			var n = logLevels[lv];
			if (1 === log) {
				req[n] = logger;
			} else {
				req[n] = function() {}
			}
			if (lv === logLevel)
				log = 0;
		}
		next();
	}
}