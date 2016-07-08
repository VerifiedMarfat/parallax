"use strict";
 
var gulp = require("gulp"),
    sass = require("gulp-sass"),
    watch = require("gulp-watch");
 
gulp.task("styles", function () {
  return gulp.src("./src/sass/app.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

gulp.task("watch", function () {
  gulp.watch("./src/sass/**/*.scss", ["styles"]);
});

gulp.task("default", ["styles"]);
