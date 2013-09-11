var task = {
	html: {
		files: ['public/*.*', 'public/**/*.*'],
		tasks: ['build-dev']
	},

	styles: {
		files: ['_less/*.less'],
		tasks: ['build-styles']
	},

	scripts: {
		files: [
			'src/*.js',
			'src/**/*.js',
			'test/*.js',
			'test/**/*.js'
		],
		tasks: ['test']
	}
};

module.exports = task;
