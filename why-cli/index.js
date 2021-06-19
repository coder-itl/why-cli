#! /usr/bin/env node
const program = require('commander')

// 导入自定义文件 help
const helpOptions = require('./lib/core/help')
const createCommands = require('./lib/core/create')

// 查看版本号
program.version(require('./package.json').version)

// 帮助和可选信息调用
helpOptions()
// 创建其他指令
createCommands()

// 解析
program.parse(process.argv)
