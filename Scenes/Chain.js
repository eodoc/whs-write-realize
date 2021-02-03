
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

const chain = new Chain()
chain
  .eat()
  .sleep(1)
  .eat()
  .sleep(2)
  .work()

chain.sleep(2).eat()

