module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		uglify: {
			myTarget: {
				files: {
					'js/prospr.js': ['js/components/*.js']
				}//files
			}//myTarget
		},//uglify
		watch: {
			options : { livereload: true},
			scripts: {
				files: ['js/components/*.js'],
				tasks: ['uglify']
			}//scripts
		}//watch
	})//initConfig
	grunt.registerTask('default', 'watch');
}//exports