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
let arr = [1, 2, 3, 2, 2, 33, 2, 4, 521]
// let newArr = arr.filter(function(number) {
//   return number > 20
// })
let newArr = arr.filter(number => number > 20)
console.log(newArr)
