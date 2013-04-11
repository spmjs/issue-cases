module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        transport: {
            options: {
                format: 'showMore/dist/{{filename}}',  // id format
                alias: {
                    "jquery": "gallery/jquery/1.8.2/jquery"
                }
            },
            trans: {
                src: ["showMore/src/showMore.js"],
                dest: ".build"
            }
        },
        concat: {
            options: {
                include: 'relative',
                paths:['.']
            },
            dist:{
                src: [".build/showMore/src/showMore-debug.js"],
                dest: "dist/showMore-debug.js"
            }
        },
        uglify: {
            dist:{
                files: {
                    'dist/showMore.js': ['dist/showMore.js']
                }
            }
        },
        clean: {
            build: ['.build']
        }
    })

    grunt.loadNpmTasks('grunt-cmd-transport');
    grunt.loadNpmTasks('grunt-cmd-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build', ['transport', 'concat', 'uglify', 'clean']);
    grunt.registerTask('default', ['concat']);
}
