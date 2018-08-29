# cNode-nodejs
一个基于nodejs+express+mySQL 开发的多人社区

mode_modules

public 存储客户端所需要的样式、js脚本、img图片等静态资源

views 存储所有的视图模板文件

app.js应用程序启动入口

.gitignore Git忽略信息

package.json 项目包说明文件

package-lock.json 根据package.json的更改自动更新

README.md 项目说明文件


遇到问题：
C:\Users\Administrator\Desktop\cNode-nodejs>nodemon app.js
[nodemon] 1.18.3
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node app.js`
module.js:540
    throw err;
    ^

Error: Cannot find module 'express'
    at Function.Module._resolveFilename (module.js:538:15)
    at Function.Module._load (module.js:468:25)
    at Module.require (module.js:587:17)
    at require (internal/module.js:11:18)
    at Object.<anonymous> (C:\Users\Administrator\Desktop\cNode-nodejs\app.js:1:79)
    at Module._compile (module.js:643:30)
    at Object.Module._extensions..js (module.js:654:10)
    at Module.load (module.js:556:32)
    at tryModuleLoad (module.js:499:12)
    at Function.Module._load (module.js:491:3)
[nodemon] app crashed - waiting for file changes before starting...

把项目中的nodemon卸载了，用node app.js 可以了

然后再全局，项目中重新装nodemon，再用nodemon app.js 就不报错了


1.可能是 之前全局有nodemon，然后项目中安装的nodemon版本比较高
2.也可能nodemon安装出现错误
3.项目内代码存在问题，且并不是单词拼写错误，而是 没有理解大意。。。。。。


知识点：
https://gitmoji.carloscuesta.me 上传github页面显示的标记  just for fun 开源项目很多都用