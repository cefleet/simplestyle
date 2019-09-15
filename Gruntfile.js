module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    watch: {
      files: ['src/**/*.js'],
      tasks: ['concat','babel', 'uglify']
    },
    concat: {
        options: {
          separator: ''
        },
        dist: {
          src: ['src/**/*.js'],
          dest: 'dist/<%= pkg.name %>.js'
        }
      },
      uglify: {
        my_target: {
          files: {
            'index.js': ['dist/simplestyle.bbl.js']
          }
        }
      },
      babel: {
        options: {
          sourceMap: true,
          presets: ['@babel/preset-env']
        },
        dist: {
          files: {
            'dist/simplestyle.bbl.js': 'dist/simplestyle.js'
          }
        }
      }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['concat']);

};