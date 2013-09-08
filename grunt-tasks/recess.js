var task = {
	options: {
		compile: true
	},
	styles: {
		src: ["vendor/bower/bootstrap/less/bootstrap-custom.less"],
		dest: "_site/css/styles.css"
	},
	styles_min: {
		options: {
			compress: true
		},
		src: ["vendor/bower/bootstrap/less/bootstrap-custom.less"],
		dest: "_site/css/styles.min.css"
	}
};
module.exports = task;
