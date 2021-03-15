// Promise.race

function fn (arr) {
  const tasks = [].concat(arr)
  const currentTasks = tasks.splice(0, 3)
  const p = Promise.race(currentTasks).then((res) => {
    const a = res
  })

  for (let i = 0; i < tasks.length; i++) {
    p = p.then(() => {
      return 
    })
  }


}
 isNaN
const promises = [
  new Promise((res, rej) => {
    setTimeout(() => res(), 3000)
  }),
  new Promise((res, rej) => {
    setTimeout(() => res(), 2000)
  }),
  new Promise((res, rej) => {
    setTimeout(() => res(), 1000)
  }),
  new Promise((res, rej) => {
    setTimeout(() => res(), 1000)
  }),
  new Promise((res, rej) => {
    setTimeout(() => res(), 2000)
  })
]

fn(promises)