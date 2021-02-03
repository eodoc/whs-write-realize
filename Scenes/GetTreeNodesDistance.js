function getDistance(a, b) {
  let path = 0;

  function getDistancePath(a1, b1, path) {
    if (a1.leftChild === b1 || a1.rightChild === b1) return path + 2;
    if (a1 === b1) return path;
    return getDistancePath(a1.parent, b1.parent, path + 2);
  }

  let paraneNode = null;
  const comparePath = Math.max(a.depth - b.depth, b.depth - a.depth);
  for (let i = 0; i < comparePath; i++) {
    paraneNode = a.parent;
  }
  return getDistancePath(paraneNode, b, path + comparePath);
}
