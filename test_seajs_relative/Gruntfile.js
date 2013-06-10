/*
 * grunt-cmd-concat
 * https://github.com/spmjs/grunt-cmd-concat
 *
 * Copyright (c) 2013 Hsiaoming Yang
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    transport: {
      files: {
        cwd: 'index',
        src: '*.js',
        dest: '.tmp'
      }
    },
    concat: {
      relative: {
        options: {
          include: 'relative'
        },
        files: {
          'index.js': ['.tmp/index.js']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-cmd-concat');
  grunt.loadNpmTasks('grunt-cmd-transport');
  // By default, lint and run all tests.
  grunt.registerTask('default', ['transport', 'concat']);
};
