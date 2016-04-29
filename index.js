var hieroglyphy = require('hieroglyphy'),
	through2 = require('through2');

module.exports = function() {
	return through2.obj(function(chunk, enc, cb) {
		try {
			this.push(hieroglyphy.hieroglyphyString(chunk.contents.toString(enc)));
		} catch (e) {
			if (e instanceof RangeError) {
				process.stderr.write("RangeError in gulp-heiroglyphy, most likely out of memory\n");
			}
			this.push(chunk);
		}

		cb();
	});
};
