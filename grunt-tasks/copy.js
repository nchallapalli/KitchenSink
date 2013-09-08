var task = {
	"dist": {
		files: [
			{expand: true, flatten: true, src: ['vendor/bower/jquery/jquery*.js'], dest: '_site/js/', filter: 'isFile'},
			{expand: true, flatten: true, src: ['vendor/bower/bootstrap/dist/fonts/*.*'], dest: '_site/fonts/', filter: 'isFile'},
			{expand: true, flatten: true, src: ['vendor/bower/bootstrap/dist/js/bootstrap*.js'], dest: '_site/js/', filter: 'isFile'}
		]
	},
	"less": {
		files: [
			{expand: true, flatten: true, src: ['_less/*.less'], dest: 'vendor/bower/bootstrap/less/', filter: 'isFile'}
		]
	}
};

module.exports = task;
