var gulp = require('gulp');
var rename = require("gulp-rename");
var scss = require('gulp-sass');
var cleanCss = require('gulp-clean-css');

gulp.task("scss", function(){
	gulp.src(['./**/*.scss', '!node_modules/**/*','!lib/**/*'])
		.pipe(scss().on('error', scss.logError))
		.pipe(cleanCss())
		.pipe(rename(function(path){
			path.extname = '.wxss'
		}))
		.pipe(gulp.dest('./'))
})

gulp.task('watch', function () {
  gulp.watch('./pages/**/*', ['scss']);
  gulp.watch('./*.scss', ['scss']);
});

gulp.task('default', ['watch'], function () {
  console.log('done!');
});
