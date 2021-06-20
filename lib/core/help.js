const program = require('commander')
const helpOptions = () => {
  // 增加自己的 options
  program.option('-w --why', 'learn a why cli')
  program.option(
    '-d --dest<dest>',
    'a destination folder，Eg: -d /src/components',
  )
  program.option(
    '-f --framework<framework>',
    'choice you framework: Vue or React',
  )

  program.on('--help', function () {
    console.log('')
    console.log('Others: ')
    console.log('  other options~')
  })
}

module.exports = helpOptions
