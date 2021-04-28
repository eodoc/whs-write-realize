// 第 152 题：实现一个 normalize 函数，能将输入的特定的字符串转化为特定的结构化数据
/**
  字符串仅由小写字母和 [] 组成，且字符串不会包含多余的空格。
  示例一: 'abc' --> {value: 'abc'}
  示例二：'[abc[bcd[def]]]' --> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}
 */

const normalize = function (str) {
  const list = str.split(/[\[\]]/).filter(Boolean)
  const result = {}
  list.reduce((result, item, index, self) => {
    result.value = item
    if (index !== self.length - 1) {
      return result.children = {}
    }
  }, result)
  return result
}


