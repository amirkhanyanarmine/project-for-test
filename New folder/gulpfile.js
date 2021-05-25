let gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    watch = require('gulp-watch'),
    pug = require('gulp-pug'),
    sass = require('gulp-sass');




    gulp.task('sass', function () {
        return gulp.src('./app/*.scss')
          .pipe(sass().on('error', sass.logError))
          .pipe(gulp.dest('app/css'));
      });

    

    gulp.task('server', function() {
        browserSync.init({
            server:{
                baseDir: './app'
            }
        })
    }); 

   
      


    gulp.task('pug', function(){
        return gulp.src('app/*.pug')
            .pipe(pug({
                pretty: true
            }))
            .pipe(gulp.dest('app'))
    });


    gulp.task('watch', function(){
        watch('./app/*.pug', gulp.parallel(browserSync.reload));
        gulp.watch('app/*.pug', gulp.parallel('pug'));
        gulp.watch('./app/*.scss', gulp.parallel('sass'));
    });

    gulp.task('default', gulp.parallel('server', 'watch'));

