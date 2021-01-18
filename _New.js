
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
function _New (func) {
  var res = {}
  if (!func.prototype) {
    throw new TypeError(`${func.name} is not a constructor`)
  }
  Object.setPrototypeOf(res, func.prototype)
  var options = Array.prototype.slice.call(arguments, 1)
  var ret = func.apply(res, options)
  if ((typeof ret === 'object' || typeof ret === 'function') && ret !== null) {
    return ret
  }
  return res
}

function New(func) {
  var res = {};
  if (func.prototype !== null) {
      res.__proto__ = func.prototype;
  }
  var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
  if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
      return ret;
  }
  return res;
}

// 默认
var A1 = function () {

}
var a1 = new A1()
console.log(a1)

// 传参数
var A2 = function (name) {
  this.name = name
}
console.log(new A2('saber'))

