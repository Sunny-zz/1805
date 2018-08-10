// es6 语法
// let  const

// let
// let 和 var 区别
// let 不能重复声明  不能声明提升  let声明的变量{}为一个作用域

// if (1) {
//   let a = 10
// }
// console.log(a)

// const 用来声明常量的  不能被修改
// const pi = 3.1415926

// var a = []
// for (let i = 0; i < 10; i++) {
//   a[i] = function() {
//     console.log(i)
//   }
// }
// a[2]()

// 变量的解构赋值
// let a = 1
// let b = 2
// let c = 3
// 数组的解构赋值
// let [a, b, c] = [1, 2, 3]
// console.log(a, b, c)
// 对象的解构赋值
// let { bar: zzt, foo = 'ccc' } = { foo: 'aaa', bar: 'bbb' }
// console.log(zzt)
// console.log(foo)
// 函数参数的解构赋值
// let user = {
//   name: 'zzt',
//   age: 20,
//   sex: '男'
// }
// function showName({ name }) {
//   console.log(name)
// }
// showName(user)

// 函数参数的默认值
// function add(a = 0, b = 0) {
//   console.log(a + b)
// }
// add(5)

// 函数的剩余参数   语法糖
// ...rest(必须写在最后面) 代表的是剩下的实参组成的数组
// function test(a, b, c, ...rest) {
//   console.log(rest)
// }
// test(1, 2, 3)

// 函数的语法糖  箭头函数

// function add(a, b) {
//   return a + b
// }
// 函数的参数=>执行的语句和返回值
// 1.函数的参数个数是一个的话 小括号可以省略
// 2.箭头右侧直接写表达式意思是返回值
// 3.如果右侧想要写执行语句的话需要用大括号，但是就不能直接作为返回值了，需要使用return写返回值
// 4.函数体内的this对象，就是定义时所在的对象，而不是调用时所在的对象
// let add = a => {
//   console.log(a)
//   return a * a
// }
// console.log(add(3))
// let arr = [1, 2, 3, 2, 2, 33, 2, 4, 521]
// let newArr = arr.filter(function(number) {
//   return number > 20
// })
// let newArr = arr.filter(number => number > 20)
// console.log(newArr)

// 模板字符串
// var username = 'zzt'
// console.log(`my name is ${username}`)

// 扩展运算符
// let obj = {
//   name: 'zzt',
//   age: 30
// }
// let obj1 = {
//   age: 20
// }

// Object.assign   $.extend()

// let newObj = Object.assign(obj, obj1)
// console.log(newObj)
// 对象的展开
// let newObj = { ...obj }
// newObj.name = 'xiaohong'
// console.log(obj)

// let arr = [1, 2, 3]

// // let newArr = [...arr]
// let newArr = arr.slice(0)
// newArr[1] = 5
// console.log(newArr)
// react 不变性原则

// let obj = {
//   name: 'zzt'
// }
// let obj1 = {
//   age: 20
// }
// let newObj = { ...obj, ...obj1 }
// console.log(newObj)

// 类 构造函数
// function Point(x, y) {
//   this.x = x
//   this.y = y
// }
// Point.prototype.toString = function() {
//   return `(${this.x},${this.y})`
// }
// let point = new Point(10, 20)
// console.log(point)
// es6类的内部 只允许写方法 并且 方法之间不能写 逗号
// constructor 方法比较特殊实例化类的时候，直接执行
// class Point {
//   // constructor 相当于构造函数
//   // 其他的方法相当于原型内的方法
//   constructor(x, y) {
//     this.x = x
//     this.y = y
//   }
//   toString() {
//     return `(${this.x},${this.y})`
//   }
// }
// let point = new Point(10, 20)
// console.log(point.toString())
// es6 对象内方法的简写
// let user = {
//   name: 'zzt',
//   sayName() {
//     console.log(this.name)
//   }
// }
// user.sayName()

// 类的继承
// class Animal {
//   constructor(name) {
//     this.name = name
//   }
//   sayName() {
//     console.log('My name is ' + this.name)
//   }
// }

// class Programmer extends Animal {
//   constructor(name) {
//     // super 指的是继承下来的父类的构造器
//     // super方法只要是继承就必须执行
//     super(name)
//   }
//   program() {
//     console.log("I'm coding...")
//   }
// }

// let zzt = new Programmer('zzt')
// zzt.sayName()

// es6 模块 modules
// 使用 webpack 搭建模块环境
// 第三方模块或核心模块的导入方式
// 模块的导入必须写在js文件的最上面

// import $ from 'jquery'
// console.log($)
// 模块导入方式 1.命名导入  导入的变量名必须和导出的相同
// a as c 相当于导入 a 该名成 c
// import {a as c,b} from './test'
// import {b} from './test'
// console.log(c,b)
// 模块导入方式 2.默认导入  导入的变量名随意

// import xxx from './test'
// import {c} from './test'
// import xxx,{c} from './test'
// console.log(xxx,c)

// let  const
// 字符串模板
// 扩展运算符
// 解构赋值
// 箭头函数
// 函数参数的默认值
// class
// modules 模块

// promise
// import axios from 'axios'
// axios
//   .get('http://jsonplaceholder.typicode.com/posts')
//   .then(res => {
//     console.log(res.data)
//   })
//   .catch(err => {
//     console.log(err)
//   })
// resolve 异步操作执行完毕后会被调用
// reject 异步操作执行出现错误

// let thing = new Promise(function(resolve, reject) {
//   console.log('running')
//   setTimeout(function() {
//     // 异步操作执行完毕
//     resolve()
//   }, 3000)
// })
// thing.then(function() {
//   console.log('thing.then()...')
// })
// thing.catch(function() {
//   console.log('thing.catch()...')
// })

// promise.all() 处理多个请求成功之后要做某件事
// 因为 axios 请求底层就是使用 promise 实现的，所以每个 axios 请求就是 promise 实例
// let promise = Promise.all([
//   axios.get('http://jsonplaceholder.typicode.com/posts'),
//   axios.get('http://jsonplaceholder.typicode.com/posts/1')
// ])
// promise.then(function(res) {
//   console.log(res)
// })

// 数组的方法     filter筛选  find查找一个  findIndex查找一个索引   map映射     reduce
// let arr = [1, 2, 3, 4, 5, 6]
// let newArr = arr.map(number => number * number)
// console.log(newArr)

let arr = [
  {
    goodsName: 'nike',
    price: 1000,
    num: 10
  },
  {
    goodsName: 'cache',
    price: 400,
    num: 5
  }
]
// reduce 函数第一个参数是函数(函数内的第一个参数是最终结果，函数的返回值也是最终结果)，第二个参数是最终结果的初始值, reduce 函数的返回值就是内部函数的 最终结果
let total = arr.reduce((obj, goods) => {
  obj = obj + goods.price * goods.num
  return obj
}, 0)
console.log(total)
