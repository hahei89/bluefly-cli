/* const fs = require('fs')
const program = require('commander')
const chalk = require('chalk')
const download = require('download-git-repo')
const ora = require('ora')
const symbols = require('log-symbols')
const path = require('path')
const child_process = require('child_process')

function removeDir (path) {
  if (fs.existsSync(path)) {
    const files = fs.readdirSync(path)
    if (files.length > 0) {
      files.forEach(function (filename) {
        if (fs.statSync(path + '/' + filename).isDirectory()) {
          removeDir(path + '/' + filename)
        } else {
          fs.unlinkSync(path + '/' + filename)
        }
      })
      fs.rmdirSync(path)
    } else {
      fs.rmdirSync(path)
    }
  } else {
    console.log('Directory path not found.')
  }
}
// 下载文件到目录
function copyFile (websiteDst, serverDst, projectName) {
  const spinner = ora('downloading template...')
  spinner.start()
  fs.mkdirSync('../temp')
  download(
    'https://github.com:hahei89/project-template#master',
    '../temp',
    err => {
      if (err) {
        spinner.fail()
        console.error(
          symbols.error,
          chalk.red(
            `${err}download template fail,please check your network connection and try again`
          )
        )
        removeDir('../temp')
        process.exit(1)
      }
      build(websiteDst, serverDst, projectName)
      removeDir('../temp')

      spinner.succeed()
    }
  )
}

function moveDir (from, to) {
  if (fs.existsSync(from) && !fs.existsSync(to)) {
    // 重新命名文件夹
    fs.renameSync(from, to)
    console.log(symbols.success, chalk.bold.cyan(`${to}创建成功`))
  } else {
    console.log(
      symbols.error,
      chalk.bold.red(`${from}不存在或者${to}模块已存在 `)
    )
    return
  }
}

function build (websiteDst, serverDst, projectName) {
  moveDir('../temp/website-template', path.join(websiteDst, projectName))

  moveDir('../temp/server-template', path.join(serverDst, projectName))
}
copyFile('src/web-content', 'src/server', 'cli-test')
 */
let tenantCode = 'gslq4dev'
let id = 566777
console.log('=removeById("' + tenantCode + '","custome","ec_project_economy_summary",' + id + ',"upVersion")')