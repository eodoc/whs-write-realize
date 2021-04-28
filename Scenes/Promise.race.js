// Promise.race

function fn (arr) {
  let tasks = [].concat(arr)
  let length = tasks.length
    
  let currentTasks = tasks.splice(0, 3).map((task, index) => {
    return task.then((res = {}) => {
     return  { index, ...res }
    })
  })
  let p = Promise.race(currentTasks)

  for (let i = 0; i < length - 1; i++) {
    p = p.then((res) => {
      if (tasks[i]) {
        currentTasks[res.index] = tasks[i].then((res = {}) => {
          return  { index: i, ...res }
        })
      } else {
        currentTasks.splice(res.index, 1)
      }
      return Promise.race(currentTasks)
    })
  }
  p = p.then((res) => {
    return 1
  })
  return p
}

const promises = [
  new Promise((res, rej) => {
    setTimeout(() => res(), 3000)
  }),
  new Promise((res, rej) => {
    setTimeout(() => res(), 2000)
  }),
  new Promise((res, rej) => {
    setTimeout(() => res(), 2000)
  }),
  new Promise((res, rej) => {
    setTimeout(() => res(), 2000)
  }),
  new Promise((res, rej) => {
    setTimeout(() => res(), 2000)
  })
]

console.time('fn')
fn(promises).then(() => {
  console.timeEnd('fn')
})

var a = [
  new Promise((res, rej) => {
    setTimeout(() => {
      console.log(5000)
      res()
    }, 5000)
  }).then(() => {
    a[0] = new Promise((res, rej) => {
      setTimeout(() => {
        console.log(16000)
        res()
      }, 16000)
    })
    Promise.race(a).then(() => console.log('success 11'))
  }),
  new Promise((res, rej) => {
    setTimeout(() => {
      console.log(100000)
      res()
    }, 100000)
  }),
  new Promise((res, rej) => {
    setTimeout(() =>{
      console.log(20000)
      res()
    }, 20000)
  })
]
Promise.race(a).then(() => console.log('success'))

