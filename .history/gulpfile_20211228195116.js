const { src, dest, task, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixier = require('autoprefixer')
const tailwindcss = require('tai')

task('sass', function(){
    return src('styles/*.scss')
    .pipe(sass())
    .pipe(dest('assets'))
});

task('watch', function(){ watch('styles/**/*scss', series('sass'))});

