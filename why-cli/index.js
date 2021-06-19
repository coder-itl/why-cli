#!/usr/bin/env node

const program = require('commander')

// 查看版本号
program.version(require('./package.json').version)

// 增加自己的 options
program.option('-w --why', 'a why cli')
program.option(
  '-d --dest<dest>',
  'a destination folder，Eg: -d /src/components',
)
program.option('-f --framework<framework>', 'choice you framework')

program.on('--help', function () {
  console.log('')
  console.log('Others: ')
  console.log('  other options~')
})
// 解析
program.parse(process.argv)
