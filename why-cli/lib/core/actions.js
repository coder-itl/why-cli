// actions.js 是提取 create 中的 actios function

// util 系统库 作用: 将不支持 promise 转换为支持 promise 语法
const { promisify } = require('util')

// 导入 download function
const download = promisify(require('download-git-repo'))

const { whyCli } = require('../config/repo-config')
const { commandSpawn } = require('../utils/terminal')

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
    await commandSpawn(command, ['install'], { cwd: `./${project}` })
  } catch (error) {
    console.log('error info no show into teminal')
  }
  // 3. 运行 npm run serve
  // 4. 打开浏览器
}
module.exports = {
  createProjectAction,
}
