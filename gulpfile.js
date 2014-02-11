'use strict';

var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    connect = require('gulp-connect');

var paths = {
    stylesSource: [ '_assets/sass/*' ],
    stylesDest: 'www/assets/styles',
    webRoot: 'www'
};


gulp.task('styles', function () {
    gulp.src( paths.stylesSource )
        .pipe( sass() )
        .pipe( gulp.dest( paths.stylesDest ) );
});


gulp.task('server', connect.server({
    root: paths.webRoot,
    port: 3333,
    open: {
        browser: 'Google Chrome'
    }
}));

gulp.task('watch', function () {
    gulp.watch( paths.stylesSource, ['styles'] );
});

gulp.task('default', [ 'styles', 'server', 'watch' ]);
