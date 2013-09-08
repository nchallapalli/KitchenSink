module.exports = function(config){

	config.set({
		frameworks: ['jasmine'],

		files: [

			// Javascript //
			'../vendor/bower/jquery/jquery.js',
			'../vendor/bower/angular/angular.js',

			// Template //
			//'template/*.html',

			// Source //
			'../src/*.js',
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

		browsers: ['PhantomJS'],

		captureTimeout: 30000,

		singleRun: false,

		reportSlowerThan: 500,

		plugins: [
			'karma-jasmine',
			'karma-chrome-launcher',
			'karma-phantomjs-launcher',
			'karma-ng-html2js-preprocessor'
		]
	});
};
