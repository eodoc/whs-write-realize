
/**
 * New
 * - 创建一个新的对象
 * - 原型对象 [[Prototype]] 的链接
 * - this 只想新创建的对象
 * - 
它创建了一个全新的对象。
它会被执行[[Prototype]]（也就是__proto__）链接。
它使this指向新创建的对象。。
通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。
如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用将返回该对象引用。

 */

var newCustom = function (constructor) {
  if (!constructor.prototype) {
    throw new TypeError(`${constructor.name || constructor} is not a constructor`)
  }

  var ret = Object.create(constructor.prototype)
  var args = Array.prototype.slice.call(arguments, 1)
  var res = constructor.apply(ret, args)
  if ((typeof res === 'object' || typeof res === 'function') && res !== null) {
    return res
  }
  return ret
}


// 默认
var A1 = function () {

}
var a1 = new A1()
var a1 = newCustom(A1)
console.log(a1)

// 传参数
var A2 = function (name) {
  this.name = name
}
console.log(new A2('saber'))
console.log(newCustom(A2, 'saber'))

