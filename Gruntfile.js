module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

//LESS//
    less: {
      development: {
        options: {
          paths: ['assets/css']
        },
        files: {
          'build/style.css': 'src/style.less'
        }
      },
      production: {
        options: {
          paths: ['assets/css'],
        },
        files: {
          'build/style.css': 'src/style.less'
        }
      }
    },

//MINIFY CSS//
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'build',
          src: ['*.css', '!*.min.css'],
          dest: 'build/release',
          ext: '.min.css'
        }]
      }
    },

//JADE//
    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          "build/index.html": "src/*.jade"
        }
      }
    },

//MINIFY HTML//
    htmlmin: {                                     // Task 
      dist: {                                      // Target 
        options: {                                 // Target options 
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files 
          'build/release/index.html': 'build/index.html',     // 'destination': 'source' 
        }
      }
    }

  });

  // Load the plugin that provides compilation of less into css.
  grunt.loadNpmTasks('grunt-contrib-less');
  // Load the plugin that provides minification of css.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  // Load the plugin that provides compilation of jade template.
  grunt.loadNpmTasks('grunt-contrib-jade');
  // Load the plugin that provides minification of html created by jade.
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // Default task(s).
  grunt.registerTask('default', ['less'], ['cssmin'], ['jade'] ['htmlmin']);

};