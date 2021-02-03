// Add(1)(2, 3)(4)
// 思路：闭包固化变量、通过重写valueOf、toString方法修改取值和输出值的方法
function Add () {
  const args = Array.from(arguments)
  const fn = function () {
    const fn_args = Array.from(arguments)
    return Add.call(null, ...args, ...fn_args)
  }
  const calc = function () {
    return args.reduce(function (pre, cur) {
      return pre + cur
    }, 0)
  } 
  fn.valueOf = calc
  fn.toString = calc
  return fn
}
