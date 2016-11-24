const gulp = require('gulp');
const del = require('del');
const typescript = require('gulp-typescript');
const sourcemaps = require('gulp-sourcemaps');
const tsconfig = require('tsconfig-glob');

const tscConfig = require('./tsconfig.json');

gulp.task('clean', function () {
    return del('dist/**/*');
});

gulp.task('compile', function () {
    return gulp
        .src(tscConfig.files)
        .pipe(sourcemaps.init())
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/app'));
});

gulp.task('copy:libs', ['clean'], function () {
    return gulp.src([
        'node_modules/angular2/bundles/angular2-polyfills.js',
        'node_modules/systemjs/dist/system.src.js',
        'node_modules/@angular/common/bundles/common.umd.js',
        'node_modules/rxjs/add/operator/switchMap.js',
        'node_modules/rxjs/bundles/Rx.js',
        'node_modules/angular2/bundles/angular2.dev.js',
        'node_modules/angular2/bundles/router.dev.js',
        'node_modules/core-js/client/shim.min.js',
        'node_modules/zone.js/dist/zone.js',
        'node_modules/reflect-metadata/Reflect.js',
        'node_modules/rxjs/**/*.js'
    ], { base: 'bower_components' })
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('dist/node_modules'))
});

gulp.task('copy:angular-libs', ['clean'], function () {
    return gulp.src([
        'node_modules/@angular/**/*.js',
    ])
        .pipe(gulp.dest('dist/node_modules/@angular'))
});

gulp.task('copy:assets', ['clean'], function () {
    return gulp.src(['app/**/*', 'systemjs.config.js', 'index.html', 'css/**/*.css', '!app/**/*.ts'], { base: './' })
        .pipe(gulp.dest('dist'))
});

gulp.task('tsconfig-glob', ['clean'], function () {
    return tsconfig({
        configPath: '.',
        indent: 2
    });
});

gulp.task('build', ['clean', 'tsconfig-glob', 'compile', 'copy:libs', 'copy:angular-libs', 'copy:assets']);
gulp.task('default', ['build']);