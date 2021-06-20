const program = require('commander')

// 将函数封装出去
const { createProjectAction } = require('./actions')

const createCommands = () => {
  program
    // vue create project-name [vue3 创建项目]
    .command('create <project> [others···]')
    // 描述信息： 克隆一个仓库 why-cli 到 本地文件夹
    .description('clone a repositiory why-cli into local folder')
    .action(createProjectAction)
}

module.exports = createCommands
