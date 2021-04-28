
// 实现对象的 Map 函数类似 Array.prototype.map

// Array.prop.map -> params -> (callback, thisArg) -> callback param -> (currentValue, index, Arry)
Object.prototype.map = function (callback, thisArg) {
  var res = {}
  for (var key in this) {
    if (this.hasOwnProperty(key)) {
      res[key] = callback.call(thisArg || window, this[key], key, this)
    }
  }
  return res
}


Array.prototype.map = function (callback, thisArg) {
  if (this === null) {
    throw new TypeError('this is null')
  }
  if (this === undefined) {
    throw new TypeError('this is undefined')
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not function')
  }
  // 非严格模式下使用改变this指向都会包装成一个对象
  var self = Object(this)
  // var len = self.length >>> 0
  var len = self.length
  if (len === undefined) {
    len = 0
  }
  var res = new Array(len)
  let i = 0
  while (i < len) {
    res[i] = callback.call(thisArg || window, self[i], i, self)
    i++
  }
  return res
}

console.log(111)