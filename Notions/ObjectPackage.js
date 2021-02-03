// 对象的包装 
String.prototype.slop = function () {
  // 'use strict'
  console.log(this)
  console.log(typeof this)
  console.log(this instanceof String)
}
''.slop()

// 去包装
new Number(123).valueOf()


// 包装对象转换原始值
console.log(Boolean(new Boolean(false))) // true
console.log(Number(new Number(123))) // 123
console.log(String(new String('abc'))) // abc
