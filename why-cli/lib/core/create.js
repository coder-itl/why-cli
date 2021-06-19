const program = require('commander')

const createCommands = () => {
  program
    // vue create project-name [vue3 创建项目]
    .command('create <project> [others···]')
    // 描述信息： 克隆一个仓库 why-cli 到 本地文件夹
    .description('clone a repositiory why-cli into local folder')
    .action((project, others) => {
      console.log(project)
      console.log(others)
    })
}

module.exports = createCommands
