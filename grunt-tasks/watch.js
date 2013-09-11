var task = {
	html: {
		files: ['public/*.*', 'public/**/*.*'],
		tasks: ['build-dev']
	},

	styles: {
		files: ['_less/*.less'],
		tasks: [
			'create-custom-bootstrap-file',
			'build:styles',
			'build:styles_min'
		]
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
