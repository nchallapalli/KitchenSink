var task = {
	options: {
		configFile: "test/karma.conf.js"
	},
	unit: {
		autoWatch: true
	},
	travis: {
		autoWatch: false,
		singleRun: true
	},
	build: {
		options: {
			files: [
				"../vendor/bower/jquery/jquery.js",
				"../vendor/bower/angular/angular.js",
				"template/*.html",
				"../lib/kitchensink-*.js",
				"../vendor/bower/angular-mocks/angular-mocks.js",
				"../test/unit/*.spec.js"]
		},
		autoWatch: false,
		singleRun: true
	}
};

module.exports = task;
