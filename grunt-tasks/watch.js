var task = {
	html: {
		files: ['public/*.*', 'public/**/*.*'],
		tasks: ['build']
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
		tasks: ['build']
	}
};

module.exports = task;
