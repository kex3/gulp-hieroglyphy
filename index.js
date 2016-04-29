var hieroglyphy = require('hieroglyphy'),
	through2 = require('through2');

module.exports = function() {
	return through2.obj(function(chunk, enc, cb) {
		this.push(hieroglyphy.hieroglyphyScript('' + chunk));

		cb();
	});
};
