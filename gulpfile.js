const gulp        = require('gulp');
const changed     = require('gulp-changed');
const imagemin    = require('gulp-imagemin');

const imageDest = './images';

gulp.task('image', async function () {
    await gulp
            .src('./images_original/**')
            .pipe(changed(imageDest))
            .pipe(
                imagemin([
                    imagemin.gifsicle({interlaced: true}),
                    imagemin.mozjpeg({quality: 75, progressive: true}),
                    imagemin.optipng({optimizationLevel: 3}),
                ]))
            .pipe(gulp.dest(imageDest));
});