const { src, dest, task, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixier = require('autoprefixer')
const tailwindcss = require('tailwindcss')

task('sass', function(){
    return src('styles/*.scss')
    .pipe(sass())
    .pipe(dest('assets'))
});

gulp.task('css', function () {
    var plugins = [
        autoprefixier,
        tailwindcss
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dest'));
})

task('watch', function(){ watch('styles/**/*scss', series('sass'))});

