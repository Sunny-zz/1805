// npm模块：核心  第三方  自定义

// var $ = require('jquery')
// console.log($)
// 第三方模块和核心模块导入方式
// 使用npm下载的第三方模块，但是由于 require 是属于 node 的方法，浏览器不支持所以我们先使用 node 命令运行js文件看效果。以后我们会用 webpack 工具帮助我们搭建开发环境编译 node 方法使其让浏览器支持。

// require 方法是去第三方模块内的 package.json 下声明的入口文件找某个js文件。

// 我们自己的 js 如何相互导入导出，使用 module.exports 导出，require('路径') 导入。
// var a = 20
// var b = require('./test')
// console.log(b)
var add = require('./test')
var a = add(4, 5)
console.log(a)
