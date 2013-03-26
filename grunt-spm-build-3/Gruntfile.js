module.exports = function(grunt) {
  // install arale/class before build:
  // spm install arale/class
  var pkg = {
    family: 'test'
  };

  grunt.initConfig({
    pkg: pkg,
    transport: {
      hello: {
        options: {
          pkg: pkg,
          // change id format
          format: '{{family}}/{{filename}}',
          // spm install arale/class, it will be installed in static/js
          paths: ['static/js']
        },
        files: [{
          cwd: 'mycode',
          src: '**/*.js',
          dest: 'tmp/src'
        }]
      }
    },
    concat: {
      hello: {
        options: {
          pkg: pkg,
          paths: ['static/js']
        },
        files: {
          // concat after transport
          'tmp/dist/hello.js': [
            'tmp/src/hello.js', 'tmp/src/foo.js',
            'static/js/arale/class.js'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-spm-build');

  // use spm build or grunt build
  grunt.registerTask('build', ['transport', 'concat']);
  // you can use a uglify task to minifier the code
  // you can use a clean task to delete the tmp directory
};
