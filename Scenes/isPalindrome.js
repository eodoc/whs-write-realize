

function isPalindrome (str) {
  const length = str.length
  let index = 0
  while (index < length / 2) {
    if (str[index] !== str[length - index - 1]) {
      return false
    }
    index++
  }
  return true
}

/** 真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。 */
function deleteOneCharacterIsPalindrome (str) {
  const length = str.length
  let i = 0
  while (str[i] === str[length - 1 - i] && i < length / 2) {
    i++
  }

  if (i === Math.ceil(length / 2)) {
    return true
  }

  // 1234521
  if (isPalindrome(str.substring(i + 1, length - i))) {
    return true
  }

  if (isPalindrome(str.substring(i, length - i - 1))) {
    return true
  }

  return false
}

deleteOneCharacterIsPalindrome('abcdba')