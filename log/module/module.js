// 模块化的思想

// 模块通过 module.exports | exports 返回对象
// 模块通过 require() 来引用

// 编写模块
const sum = (a, b) => a + b;

// 方式 1
module.exports = {
  sum: sum
}

// 方式 2
module.exports.sum = sum

// 方式 3
exports.sum = sum

// 引用模块
// import custome-name from '../custome-path'
// const custome-name = require('../custome-path')