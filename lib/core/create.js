const program = require('commander')

// 将函数封装出去
const {
  createProjectAction,
  addComponentAction,
  addPageAndRoute,
} = require('./actions')

const createCommands = () => {
  program
    // vue create project-name [vue3 创建项目]
    .command('create <project> [others···]')
    // 描述信息： 克隆一个仓库 why-cli 到 本地文件夹
    .description('clone a repositiory why-cli into local folder')
    .action(createProjectAction)

  // 实现组件创建命令
  program
    .command('addcpn <name>')
    .description(
      'add vue component,Eg: why addcpn HelloWorld [ -d src/components]',
    )
    .action((name) => {
      addComponentAction(name, program.dest || 'src/components')
    })

  // 实现路由
  program
    .command('addpage <page>')
    .description(
      'add vue page and router config,Eg: why addpage Home [-d src/pages]',
    )
    .action((page) => {
      addPageAndRoute(page, program.dest || 'src/pages')
    })
}

module.exports = createCommands
