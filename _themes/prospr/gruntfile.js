module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass')

	grunt.initConfig({
		uglify: {
			myTarget: {
				files: {
					'js/prospr.js': ['js/components/*.js']
				}//files
			}//myTarget
		},//uglify
		compass : {
			dev: {
				options: {
					config: 'config.rb'
				}//options
			}//dev
		},//compass
		watch: {
			options : { livereload: true},
			scripts: {
				files: ['js/components/*.js'],
				tasks: ['uglify']
			},//scripts
			html: {
				files: ['layouts/*.html', 'partials/*.html', 'templates/*.html']
			},//html
			sass: {
				files: ['sass/*.scss'],
				tasks: ['compass:dev']
			}//sass
		}//watch
	})//initConfig
	grunt.registerTask('default', 'watch');
}//exports