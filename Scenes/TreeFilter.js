// 题目：实现一个对树型结构进行过滤的函数，其中树形结构的格式如下：
/*
tree = [
    {name: 'A'},
    {name: 'B', children: [
        {name: 'A'},
        {name: 'AA', children: [...]}
    ]},
    {name: 'C'}
]
*/

// 1. 假设我输入的 str 为 A 则过滤后返回的结果为
/*
[
    {name: 'A'},
    {name: 'B', children: [
        {name: 'A'}
    ]}
]
*/

// 2. 假设我输入的 str 为 AA 则过滤后返回的结果为
/*
[
    {name: 'B', children: [
        {name: 'AA', children: [...]}
    ]}
]
*/

// 3. 假设我输入的 str 为 B 则过滤后返回的结果为
/*
[
    {name: 'B', children: [
        {name: 'A'},
        {name: 'AA', children: [...]}
    ]}
]
*/



// 实现该函数，要求不允许对原有的tree做任何修改，最终返回结果是一棵新结构出来的树
function filter (tree, str) {
  let res = []
  tree.forEach(item => {
    if (item.name === str) {
      res.push(item)
    } else {
      let children = item.children
      if (children && children.length > 0) {
        const nodes = filter(children, str)
        if (nodes.length > 0) {
          res.push({
            name: item.name,
            children: nodes
          })
        }
      }
    }
  })
  return res
}

var tree = [
  { name: 'A' },
  {
    name: 'B',
    children: [
      {name: 'A'},
      {
        name: 'AA',
        children: []
      }
  ]},
  {name: 'C'}
]

const a1 = filter(tree, 'A')
console.log(JSON.stringify(a1))
const a2 = filter(tree, 'AA')
console.log(JSON.stringify(a2))
const a3 = filter(tree, 'B')
console.log(JSON.stringify(a3))