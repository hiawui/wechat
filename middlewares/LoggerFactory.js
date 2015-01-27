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
			if (1 === log) {
				obj[lv] = logger;
			} else {
				obj[lv] = function() {}
			}
			if (lv === logLevel)
				log = 0;
		}
		next();
	}
}