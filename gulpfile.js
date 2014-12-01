'use strict';

var sourcemaps = require('gulp-sourcemaps');
var gulp = require('gulp');
var rename = require('gulp-rename');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var fs = require('fs');
var path = require('path');

function compileScripts(entryFile) {

  var bundler = browserify(entryFile);

  function bundle () {
    var stream = bundler.bundle({ debug: true});

    stream.on('error', function (err) { console.error(err) });
    stream = stream.pipe(source(entryFile));
    stream.pipe(rename('bundle.js'));

    stream.pipe(gulp.dest(path.dirname(entryFile)));
  }

  return bundle();
}

function compileAllScripts (dir) {
  fs.readdir(dir, function (err, files) { 
    if (err) console.error(err);
    files.forEach(function(item){
      compileScripts(dir + '/' + item + '/app.js');
    });
  });
}

function removeBundles (dir) {
  fs.readdir(dir, function (err, files) { 
    if (err) console.error(err);
    files.forEach(function(item){
      fs.unlink(dir + '/' + item + '/bundle.js', function (err){
        if (err) console.error(err);
      });
    });
  });
}

gulp.task('default', function () {
  compileAllScripts('./examples');
});

gulp.task('clean', function () {
  removeBundles('./examples');
});
