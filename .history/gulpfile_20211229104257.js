const { src, dest, task, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixier = require('autoprefixer');
const tailwindcss = require('tailwindcss');
const postcss = require('gulp-postcss');
const rename = require("gulp-rename");

task('sass', function(){
    return src('styles/*.scss')
    .pipe(sass())
    .pipe(dest('assets'))
});

task('css', function () {
    var plugins = [
        tailwindcss,
        autoprefixier,
        
    ];
    return src('src/*.css')
        .pipe(postcss(plugins))
         .pipe(rename("main/text/ciao/goodbye.md"))
        .pipe(dest('assets'));
})

task('watch', function(){ watch('styles/**/*scss', series('sass'))});

