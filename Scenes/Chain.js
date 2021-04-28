
// 实现等待执行输出
// 思路：维护任务队列记录任务、任务队列通过next串联、通过宏任务开始执行任务队列
function Chain () {
  this.tasks = []
  this.eat = function () {
    this.tasks.push(() => {
      console.log('eat')
      this.then()
    })
    return this
  }
  this.work = function () {
    this.tasks.push(() => {
      console.log('work')
      this.then()
    })
    return this
  }
  this.sleep = function (time) {
    this.tasks.push(() => {
      setTimeout(() => {
        console.log(`wait ${time}`)
        this.then()
      }, time * 1000)
    })
    return this
  }
  this.then = function () {
    var task = this.tasks.shift()
    if (task) {
      task()
    }
    return this
  }
  // 随后执行
  setTimeout(() => {
    this.then()
  })
}

// const chain = new Chain()
// chain
//   .eat()
//   .sleep(1)
//   .eat()
//   .sleep(2)
//   .work()

// chain.sleep(2).eat()

function NewChain () {
  this.tasks = []
  this.runningTask = null

  this.eat = function () {
    const task = function () {
      return new Promise(function (resolve, reject) {
        console.log('eat')
        resolve()
      })
    }
    if (this.runningTask) {
      this.tasks.push(task)
    } else {
      this.runningTask = task
      this.runTask()
    }
    return this
  }

  this.work = function () {
    const task = function () {
      return new Promise(function (resolve, reject) {
        console.log('work')
        resolve()
      })
    }
    if (this.runningTask) {
      this.tasks.push(task)
    } else {
      this.runningTask = task
      this.runTask()
    }
    return this
  }

  this.sleep = function (time) {
    const task = function () {
      return new Promise(function (resolve, reject) {
        setTimeout(() => {
          console.log(`wait ${time}`)
          resolve()
        }, time * 1000)
      })
    }
    if (this.runningTask) {
      this.tasks.push(task)
    } else {
      this.runningTask = task
      this.runTask()
    }
    return this
  }

  this.runTask = function () {
    const self = this
    this.runningTask().then(function () {
      if (self.tasks.length > 0) {
        self.runningTask = self.tasks.shift()
        self.runTask()
      }
    })
  }

  return this
}

const newChain = new NewChain()
newChain
  .eat()
  .sleep(1)
  .eat()
  .sleep(2)
  .work()

newChain.sleep(2).eat()
