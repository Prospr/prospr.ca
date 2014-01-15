module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');

	grunt.initConfig({
		uglify: {
			myTarget: {
				files: {
					'js/prospr.js': ['js/components/*.js']
				}//files
			}//myTarget
		},//uglify
		compass: {
			dev: {
				options: {
					config: 'config.rb'
				}//options
			}//dev
		},//compass
		imagemin: {
			dynamic: {
		        files: [{
		            expand: true,
		            cwd: 'img/',
		            src: ['src/*.{png,jpg,gif}'],
		            dest: 'img/'
		        }]//files
		    }//dynamic
		},//imagemin
		watch: {
			options : { livereload: true},
			scripts: {
				files: ['js/components/*.js'],
				tasks: ['uglify']
			},//scripts
			html: {
				files: ['layouts/*.html', 'partials/*.html', 'templates/*.html', '../../_content/*.html', '../../_content/*/*.html']
			},//html
			sass: {
				files: ['sass/*.scss'],
				tasks: ['compass:dev']
			},//sass
			images: {
				files: ['img/src/*.jpg', 'img/src/*.png', 'img/src/*.gif'],
				tasks: ['imagemin']
			}
		}//watch
	})//initConfig
	grunt.registerTask('default', 'watch');
}//exports