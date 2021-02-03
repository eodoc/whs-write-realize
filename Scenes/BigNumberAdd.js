/* 大数相加 */

// BigInt实现大数相加
function add (num1, num2) {
  const numberBig1 = BigInt(num1)
  const numberBig2 = BigInt(num2)
  return (numberBig1 + numberBig2).toString()
}

// 拆分大数为固定长度的小数进行相加、多余进位
function add1 (num1, num2) {
  const size = 10
  const maxLength = Math.max(num1.length, num2.length)
  let currentLenght = 0
  let res = []
  while (currentLenght < maxLength) {
    const tol = Number(num1.slice(currentLenght, currentLenght + 10) || 0) +
      Number(num2.slice(currentLenght, currentLenght + 10) || 0)
    res.push(tol)
    currentLenght += 10
  }
  return res.reduce((ret, item) => {
    item = item.toString()
    if (ret === '') return item
    if (item.length > 10) {
      const lastNum = ret.slice(0, 1)
      return (
        item.slice(0, 10) + (Number(lastNum) + Number(item[item.length - 1])).toString() +
           + ret.slice(1, 11)
      )
    } else {
      return item + ret
    }
  }, '')
}

const aa = add1('1', '99999')
console.log(aa)
