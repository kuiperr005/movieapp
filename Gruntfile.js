module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		requirejs: {
			compile: {
				options: {
					baseUrl: "assets/js",
					name: "moviebucket",
					mainConfigFile: "assets/js/lib/config/config.js",
					optimize: "uglify2",
					out: "dist/optimized.min.js"
				}
			}
		},
		watch: {
			css: {
				files: 'assets/sass/**/*.scss',
				tasks: ['compass', 'autoprefixer:prefix'],
				options: {
					livereload : true
				}
			},
			js : {
				files : ['assets/js/**/*.js'],
				tasks : ['jshint', 'requirejs:compile'],
				options : {
					livereload : true
				}
			}
		},
		compass: {
			dist: {
				options: {
					sassDir: 'assets/sass',
					cssDir: 'assets/css',
					imagesDir: 'assets/images',
					javascriptsDir: 'assets/js',
					fontsDir: 'assets/fonts',
					environment: 'development',
					outputStyle: 'compressed',
					noLineComments: true
				}
			}
		},
		jshint : {
			beforeconcat: ['assets/js/*.js'],
			options : {
				browser: true,
				curly: false,
				eqeqeq: false,
				eqnull: true,
				expr: true,
				immed: true,
				newcap: true,
				noarg: true,
				smarttabs: true,
				sub: true,
				undef: false
			}
		},
		concat: {
		  options: {
		    // define a string to put between each file in the concatenated output
		    separator: ';'
		  },
		  dist: {
		    // the files to concatenate
		    src: ['assets/js/vendor/*.js', 'assets/js/*.js'],
		    // the location of the resulting JS file
		    dest: 'dist/<%= pkg.name %>.js'
		  }
		},
		uglify: {
		  options: {
		    // the banner is inserted at the top of the output
		    banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n'
		  },
		  dist: {
		    files: {
		      'dist/<%= pkg.name %>.min.js': ['<%= concat.dist.dest %>']
		    }
		  }
		},
		autoprefixer: {
            prefix: {
                src: 'assets/css/*css'
            }
        },
	});

	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.registerTask('default',['watch']);
}