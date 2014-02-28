
var lrSnippet = require('connect-livereload')({port: 35729 });
var livereloadMiddleware = function(connect, options){

    return [
        lrSnippet
        ,connect.static(options.base),
        ,connect.directory(options.base)
    ]
};

module.exports = function (grunt){


  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['connect']);

  grunt.initConfig({
	connect: {dev: {options: {base: 'app',keepalive: true, open: true,middleware: livereloadMiddleware}}}
  });
};