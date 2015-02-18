module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	concat: {
		options: {
		  separator: ';',
		},
		dist: {
		  src: 'js/modules/*.js',
		  dest: 'js/main.js'
		},
	},
	sass: {                              // Task
		dist: {                            // Target
		  options: {                       // Target options
			style: 'expanded',
			require: ['susy','breakpoint']
		  },
		  files: {                         // Dictionary of files
			'css/main.css': 'sass/main.scss',       // 'destination': 'source'
		  }
		}
	},
	watch: {
	  scripts: {
		files: ['js/modules/*.js','sass/main.scss', 'sass/project/*.scss'],
		tasks: ['concat','sass'],
		options: {
		  spawn: false,
		},
	  },
	},
	uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>\n Author : <%= pkg.author %>\n */\n'
      },
      build: {
        src: 'js/modules/*.js',
        dest: 'js/main.js'
      }
    }
  });

  // Load the plugin that provides the task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
  

  // Default task(s).
  grunt.registerTask('default', ['concat','sass']);
  grunt.registerTask('u', ['uglify']);
  
};