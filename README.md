# why-cli

```bash
    脚手架的开发学习
```

+ 脚手架源码拉取

  ```bash
  github: 
  	http: https://github.com/coder-itl/why-cli.git
  	ssh: git@github.com:coder-itl/why-cli.git
  
  gitee: 
  	http: https://gitee.com/coder-itl/why-cli.git
  	ssh: git@gitee.com:coder-itl/why-cli.git
  	
  ```

+ 依赖下载

  ```bash
  npm install
  ```

+ 基础指令

  ```bash
  why -V | why --version # 查看版本号
  why create <project-name> # 创建项目
  why --help # 查看帮助信息
  why -d | --dest # 创建对应目录
  ```

+ 对应库依赖文档地址

  ```bash
  
  commander: https://github.com/tj/commander.js
  
  download-git-repo:
  	https://www.npmjs.com/package/download-git-repo | https://gitlab.com/flippidippi/download-git-repo
  
  ```

+ 内容补充

  ```javascript
  const {promisify} = require('util');
  
  const download = promisify(require('download-git-repo'));
  
  // async await 原理解析: callback ->promisify(函数) -> promise -> async await 
  const createProjectAction = async (project) => {
    // 1. clone 项目
    await download()
  
    // 2. 执行 npm install
    // 3. 运行 npm run serve
    // 4. 打开浏览器
  }
  ```

+ 仓库地址格式

  ```bash
  GitHub - github:owner/name or simply owner/name
  
  GitLab - gitlab:owner/name
  
  Bitbucket - bitbucket:owner/name
  ```

  ```bash
  https://github.com/coder-itl/why-cli.git [github https地址使用 direct]
  
  引用[扫码阅读]
  
  ```

  <img src="https://i.loli.net/2021/06/20/i71X3QL2K6aIF9W.png" title="下拉寻找: Direct"  width="200">