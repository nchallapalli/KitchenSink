var task = {
	html: {
		files: ['public/*.*', 'public/**/*.*'],
		tasks: ['jekyll']
	},

	styles: {
		files: ['_less/*.less'],
		tasks: [
			'create-custom-bootstrap-file',
			'build:styles',
			'build:styles_min'
		]
	}
};

module.exports = task;
