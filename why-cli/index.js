#!/usr/bin/env node

const program = require('commander')

// 查看版本号
program.version(require('./package.json').version)

// 增加自己的 options
program.option('-w --why', 'a why cli')

// 解析
program.parse(process.argv)
