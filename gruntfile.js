module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/styles.css': 'scss/styles.scss' // syntax:  target file: source file
                }
            }
        },
        postcss: {
            options: {
                map: true,
                processors: [
                    require('autoprefixer')({
                        browsers: ['last 2 versions', 'ie 6-8', 'Firefox > 20', 'Chrome 25']
                    })
                ]
            },
            dist: {
                src: 'css/*.css'
            }
        },
        watch: {
            css: {
                files: 'scss/*.scss',
                tasks: ['sass', 'postcss']
            }
        }
    }); //end initConfig

    // tasks declaration
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.registerTask('default',['watch']);
}