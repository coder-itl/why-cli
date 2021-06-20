// actions.js 是提取 create 中的 actios function

// util 系统库 作用: 将不支持 promise 转换为支持 promise 语法
const { promisify } = require('util')
const path = require('path')
const open = require('open')

// 导入 download function
const download = promisify(require('download-git-repo'))

const { whyCli } = require('../config/repo-config')
const { commandSpawn } = require('../utils/terminal')
const { compile, writeToFile } = require('../utils/utils')

// async await 原理解析: callback ->promisify(函数) -> promise -> async await
const createProjectAction = async (project) => {
  // 下载时用于提示
  console.log('why cli is download,place wait ···········')
  try {
    // 1. clone 项目
    await download(whyCli, project, { clone: true })

    // 2. 执行 npm install
    const command = process.platform === 'win32' ? 'npm.cmd' : 'npm'
    // cwd: 定义 npm install 进入的目录
    await commandSpawn(command, ['install'], { cwd: `./${project}/` })

    // 3. 运行 npm run serve
    await commandSpawn(command, ['run', 'serve'], { cwd: `./${project}` })
    // 4. 打开浏览器
    const localhost = '127.0.0.1:8080/'
    open(localhost)
  } catch (error) {
    console.log('error info no show into teminal')
  }
}

// 添加组件的action
const addComponentAction = async (name, dest) => {
  // 1.编译ejs模板 result
  const result = await compile('vue-component.ejs', {
    name,
    lowerName: name.toLowerCase(),
  })

  // 2.写入文件的操作
  const targetPath = path.resolve(dest, `${name}.vue`)
  console.log(targetPath)
  writeToFile(targetPath, result)
}

// 添加组件和路由
const addPageAndRoute = async (name, desc) => {
  // 编译模板
  const data = { name, lowerName: name.toLowerCase() }
  const pageResult = await compile('vue-component.ejs', data)
  const routeResult = await compile('vue-router.ejs', data)

  // 写入文件
  const targetPagePath = path.resolve(dest, `${name}.vue`)
  const targetRoutePath = path.resolve(dest, `router.js`)
  writeToFile(targetPagePath, pageResult)
  writeToFile(targetRoutePath, routeResult)
}

module.exports = {
  createProjectAction,
  addComponentAction,
  addPageAndRoute,
}
