
// 实现等待执行输出
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

