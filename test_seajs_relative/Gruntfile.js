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
    concat: {
      relative: {
        options: {
          include: 'relative'
        },
        files: {
          'index.js': ['index/index.js']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-cmd-concat');
  // By default, lint and run all tests.
  grunt.registerTask('default', ['concat']);
};
