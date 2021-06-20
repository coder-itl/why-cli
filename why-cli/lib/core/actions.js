// actions.js 是提取 create 中的 actios function

const program = require('commander')

const createProjectAction = (project) => {
  console.log('函数调用中')
}
module.exports = {
  createProjectAction,
}
