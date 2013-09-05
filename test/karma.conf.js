module.exports = function(config){

	config.set({
		frameworks: ['jasmine'],

		files: [

			// Javascript //
			'../vendor/bower/jquery/jquery.js',
			'../vendor/bower/angular/angular.js',

			// Template //
			'template/*.html',

			// Source //
			'../src/**/*.js',

			// Mocks //
			'../vendor/bower/angular-mocks/angular-mocks.js',

			// Test Code //
			'../test/unit/**/*.js'

		],

		exclude: [],

		reporters: ['progress'],

		port: 9100,

		colors: true,

		autoWatch: true,

		browsers: [process.env.TRAVIS ? 'PhantomJS' : 'Chrome'],

		captureTimeout: 30000,

		singleRun: false,

		reportSlowerThan: 500,

		preprocessors: {
			"**/*.html":      "html2js"
		},

		plugins: [
			'karma-jasmine',
			'karma-chrome-launcher',
			'karma-phantomjs-launcher',
			'karma-ng-html2js-preprocessor'
		]
	});
};
