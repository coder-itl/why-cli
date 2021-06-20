/**
 * 执行终端相关命令
 * exec spawn 需要后续了解
 */

const { spawn } = require('child_process')

const commandSpawn = (...args) => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(...args)
    // 输出进程中的信息
    childProcess.stdout.pipe(process.stdout)
    // 输出进程中错误信息
    childProcess.stderr.pipe(process.stderr)
    // 监听事件
    childProcess.on('close', () => {
      resolve()
    })
  })
}

module.exports = {
  commandSpawn,
}
