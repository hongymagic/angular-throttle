'use strict';

module.exports = function (grunt) {
	require('load-grunt-tasks')(grunt);

	var jshintrc = grunt.file.readJSON('.jshintrc');
	jshintrc.reporter = require('jshint-stylish');

	grunt.initConfig({
		pkg: grunt.file.readJSON('bower.json'),

		files: {
			grunt: 'Gruntfile.js',
			src: ['angular-throttle.js'],
			test: ['test/**/*.spec.js']
		},

		jshint: {
			options: jshintrc,
			all: ['<%= files.grunt %>', '<%= files.src %>', '<%= files.test %>']
		},

		karma: {
			unit: {
				configFile: 'karma.unit.conf.js',
				singleRun: true
			},

			debug: {
				configFile: 'karma.unit.conf.js',
				browsers: ['Chrome']
			},

			continuous: {
				configFile: 'karma.unit.conf.js',
				singleRun: true,
				reporters: ['teamcity']
			}
		},

		uglify: {
			dist: {
				options: {
					sourceMap: true
				},
				files: {
					'angular-throttle.min.js': ['angular-throttle.js']
				}
			}
		},

		lintspaces: {
			all: {
				src: ['<%= jshint.all %>'],
				options: {
					editorconfig: '.editorconfig'
				}
			}
		},

		watch: {
			scripts: {
				files: ['<%= jshint.all %>'],
				tasks: ['default']
			}
		}
	});

	grunt.registerTask('default', ['jshint', 'lintspaces', 'karma:unit', 'uglify']);
	grunt.registerTask('debug', ['jshint', 'lintspaces', 'karma:debug']);
	grunt.registerTask('build', ['jshint', 'karma:continuous', 'uglify']);
};
