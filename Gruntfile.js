'use strict';

module.exports = function(grunt) {

	var taskObject = {
		pkg: grunt.file.readJSON('package.json')
	};

	grunt.file.expand('grunt-tasks/*.js', '!grunt-tasks/_*.js').forEach(function(file) {
		var name = file.split('/');
		name = name[name.length - 1].replace('.js', '');
		var task = require('./'+ file);

		if(grunt.util._.isFunction(task)){
			task(grunt);
		} else {
			taskObject[name] = task;
		}
	});

	grunt.initConfig(taskObject);

	// Automatically load in all Grunt npm tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.registerTask("default", ["serve"]);

	grunt.registerTask("serve", [
		"karma:runonce"
		, "build-dev"
		, "connect"
		, "open"
		, "watch"
	]);

	grunt.registerTask("serve-dist", [
		"karma:runonce"
		, "build-dist"
		, "connect"
		, "open"
		, "watch"
	]);

	grunt.registerTask("test", ["karma:runonce"]);

	grunt.registerTask("test-dist", ["karma:runonce"]);

	grunt.registerTask("build-dev", [
		"jekyll:dev"
		, "build-styles"
	]);

	grunt.registerTask("build-dist", [
		"jekyll:dist"
		, "build-styles"
	]);

	grunt.registerTask("build-styles", [
		"create-custom-bootstrap-file","copy",
		"recess:styles", "recess:styles_min"
	]);

	grunt.registerTask("create-custom-bootstrap-file", function(){
		var fs = require("fs");
		var bootstrapLessDirectory = "vendor/bower/bootstrap/less/";
		var bootstrapLessFile = bootstrapLessDirectory + "bootstrap.less";

		if(!fs.existsSync(bootstrapLessFile))
			throw "Bootstrap file not found. You may need to run 'npm install' and 'bower install' to generate the files. Expected location: " + bootstrapLessFile;

		var content = fs.readFileSync(bootstrapLessFile, "utf8");
		if(content === null || content.length == 0)
			throw "Unable to read the contents of:" + bootstrapLessFile;

		// Replace the variables with the customized version
		content = content.replace("variables.less", "variable-overrides.less");

		// Add the theme
		content += "\n// Custom theme\n";
		content += "@import \"theme.less\";";

		fs.writeFileSync(bootstrapLessDirectory + "bootstrap-custom.less", content, "utf8");
	});
};
