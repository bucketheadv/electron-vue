var gulp = require('gulp')
var electronInfo = require('electron/package.json')
var path = require('path')
var shell = require('shelljs')

gulp.task('pack', () => {
  let platform = process.platform
  let icon = path.join(__dirname, 'public/images/easyicon.icns')
  shell.exec(`node_modules/electron-packager/cli.js ./ restron --platform=${platform} --version=${electronInfo.version} --out=./package --overwrite --icon=${icon} `, { async: true}, (code, output) => {
    if(code === 0) {
      console.log('Package finished.');
    }
  })
})
