'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('gulp-cssnano');
const uncss = require('gulp-uncss');
const browserSync = require('browser-sync').create();
const spritesmith = require('gulp.spritesmith');

gulp.task('styles', function(){

	return gulp.src('frontend/styles/main.sass')
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(postcss([ autoprefixer() ]))
	.pipe(cssnano())
	// .pipe(uncss({
	// 	html:['public/*.html']
	// 	}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('public/styles/'))
	.pipe(browserSync.reload({stream:true}));
});

gulp.task('sprite', function () {
  var spriteData = gulp.src('frontend/assets/img/*.png').pipe(spritesmith({
    imgName: 'sprite.png',
    cssName: '_sprite.sass',
    padding: 5
  }));
  return spriteData.pipe(gulp.dest('public/image/'));
});

gulp.task('watch', function(){
	gulp.watch('frontend/styles/*.*', gulp.series('styles'));
});

gulp.task('serve', function(){
	browserSync.init({
		server: 'public'
	});

	browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('dev',
	gulp.series(gulp.parallel('watch', 'serve')));
