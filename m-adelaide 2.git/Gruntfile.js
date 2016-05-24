module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
       concat: {
            dist: {
                src: [
                    'js/bower/jquery/jquery.js',
                    'js/mobileinit.js',
                    'js/bower/jquery-mobile-bower/js/jquery.mobile-1.4.2.js',
                    'js/events.js'
                ],
                dest: 'js/build/production.js',
            }
        },
        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },
        sass: {
            dist: {
              files: {
                'css/style.css': 'sass/style.scss'
              }
            }
          },
        autoprefixer: {
            single_file: {
              src: 'css/style.css',
              dest: 'css/build/style.css'
            }
        },
        cssmin: {
          minify: {
            expand: true,
            cwd: 'css/',
            src: ['*.css', '!*.min.css'],
            dest: 'css/build',
            ext: '.min.css'
          }
        },
          minify: {
            expand: true,
            cwd: 'css/',
            src: ['style.css', '!*.min.css'],
            dest: 'css/build',
            ext: '.min.css'
       },
        watch: {
          options: {
            livereload: true,
          },
          scripts: {
            files: ['js/*.js'],
            tasks: ['concat', 'uglify'],
            options: {
              spawn: false,
            }
          },
          css: {
            files: ['sass/**/*.scss'],
            tasks: ['sass', 'autoprefixer', 'cssmin'],
            options: {
              spawn: false,
            }
          }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default', ['sass', 'autoprefixer', 'cssmin', 'concat', 'uglify' ]);

};
