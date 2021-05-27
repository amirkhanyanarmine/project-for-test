const {src, dest, watch, parallel, series} = require('gulp');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const concatCss = require('gulp-concat-css');
const cssMinify = require('gulp-css-minify');
const htmlmin = require('gulp-htmlmin');


function browsersync() {
    browserSync.init({
        server:{
            baseDir: "./app/"
        }
    })
}

function minify() {
    return src('app/index.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('./dist'))
}


function images() {
        return src('app/**/svg/*')
            .pipe(imagemin())
            .pipe(dest('dist/image'))
    
}

function styles() {
    return src('app/**/css/*.css')
    .pipe(concatCss("css/style.css"))
    .pipe(dest('dist/'))
}


function minifyCss () {
    return src('dist/css/style.css')
    .pipe(cssMinify())
    .pipe(dest('./dist/css'))
}


function watching() {
    watch(['./app/*.html']).on('change', browserSync.reload);
}




exports.images = images;
exports.browsersync = browsersync;
exports.styles = styles;
exports.minifyCss = minifyCss;
exports.minify = minify;


exports.default = parallel(browsersync, watching);