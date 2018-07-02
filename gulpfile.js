const gulp = require('gulp')
const confirm = require('inquirer-confirm')
const ghpages = require('gh-pages')

gulp.task('deploy', (done) => {
    confirm('are you sure you want to deploy to gh-pages').then(() => {
        ghpages.publish('_site', (err) => console.log(err))
        done()
    }, () => {
        process.stdout.write('deploy aborted\n')
        done()
    })
})
