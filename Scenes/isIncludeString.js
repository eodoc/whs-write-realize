
/**
  真题描述： 设计一个支持以下两种操作的数据结构：

  void addWord(word)
  bool search(word)
  search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。
  . 可以表示任何一个字母。

  示例:

  addWord("bad")
  addWord("dad")
  addWord("mad")
  search("pad") -> false
  search("bad") -> true
  search(".ad") -> true
  search("b..") -> true
  说明:
  你可以假设所有单词都是由小写字母 a-z 组成的。
 */

function addWord (word) {
  if (addWord.words[word.length]) {
    addWord.words[word.length].push(word)
  } else {
    addWord.words[word.length] = [word]
  }
}

function search (word) {
  if (!addWord.words[word.length]) {
    return false
  }
  const len = word.length
  if (!word.includes('.')) {
    return addWord.words[len].includes(word)
  }

  const reg = new RegExp(word)

  return addWord.words[len].some((item) => {
    return reg.test(item)
  })
}
addWord.words = {}

addWord("bad")
addWord("dad")
addWord("mad")
console.log(search("pad"))
console.log(search("bad"))
console.log(search(".ad"))
console.log(search("b.."))