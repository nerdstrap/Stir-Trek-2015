/// <binding BeforeBuild='clean, copy, models' Clean='clean' />

var gulp = require("gulp");
var rimraf = require("rimraf");
var fs = require("fs");
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

eval("var project = " + fs.readFileSync("./project.json"));

var paths = {
    bower: "./bower_components/",
    lib: "./" + project.webroot + "/lib/"
};

gulp.task("clean", function (cb) {
    rimraf(paths.lib, cb);
});

gulp.task("copy", ["clean"], function () {
    var bower = {
        "bootstrap": "bootstrap/dist/**/*.{js,map,css,ttf,svg,woff,eot}",
        "bootstrap-touch-carousel": "bootstrap-touch-carousel/dist/**/*.{js,css}",
        "hammer.js": "hammer.js/hammer*.{js,map}",
        "jquery": "jquery/jquery*.{js,map}",
        "jquery-validation": "jquery-validation/jquery.validate.js",
        "jquery-validation-unobtrusive": "jquery-validation-unobtrusive/jquery.validate.unobtrusive.js",
        "fotorama": "fotorama/fotorama.{js,css}"
    }

    for (var destinationDir in bower) {
        gulp.src(paths.bower + bower[destinationDir])
          .pipe(gulp.dest(paths.lib + destinationDir));
    }
});

gulp.task("models", function () {
    gulp.src(['TypeScripts/Moods.js', 'TypeScripts/Cat.js'])
           .pipe(concat("models.js"))
           .pipe(jshint())
           .pipe(uglify())
           .pipe(rename({
               extname: '.min.js'
           }))
           .pipe(gulp.dest(paths.lib))
});