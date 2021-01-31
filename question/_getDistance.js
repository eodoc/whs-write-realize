

function getDistance(a, b) {
  let path = 0
  
  function getDistancePath (a1, b1, path) {
      if (a1.leftChild === b1 || a1.rightChild === b1) {
          return path + 2
      } else if (a1 === b1) {
          return path
      } else {
          return getDistancePath(a1.parent, b1.parent, path + 2)
      }
  }
  
  let paraneNode = null
  if (a.depth > b.depth) {
      for (let i = 0; i < a.depth - b.depth; i++) {
          paraneNode = a.parent
      }
      return getDistancePath(paraneNode, b, path + a.depth - b.depth)
  } else {
      for (let i = 0; i < b.depth - a.depth; i++) {
          paraneNode = b.parent
      }
      return getDistancePath(a, paraneNode, path + b.depth - a.depth)
  }
  
}