const res = {}
function getDepth (el, dep = 0, maxDep) {
  if (el !== document) {
    return getDepth(el.parentNode, dep + 1, maxDep)
  } else {
    return Math.max(dep, maxDep)
  }
}

function getSub (el, maxSub) {
  let childNodes = el.childNodes
  let num = 0
  for(let i = 0;i < childNodes.length; i++){
      if(childNodes[i].nodeName !== '#text'){
        num++
      }
  }
  return Math.max(num, maxSub)
}

const totalElements = document.getElementsByTagName("*")
res.totalElementsCount = totalElements.length

let maxDep = 0
let maxSub = 0
for(let i = 0;i < totalElements.length; i++){
  maxDep = getDepth(totalElements[i], 0, maxDep)
  maxSub = getSub(totalElements[i], maxSub)
}
res.maxDOMTreeDepth = maxDep
res.maxChildrenCount = maxDep

console.log(res)