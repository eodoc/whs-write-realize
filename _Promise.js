
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function _Promise (func) {

  this.status = PENDING
  this.onFulFillCallbacks = []
  this.onRejectCallBacks = []

  const self = this

  function resolve (value) {
    setTimeout(function () {
      if (self.status === PENDING) {
        self.value = value
        self.status = FULFILLED
        self.onFulFillCallbacks.forEach(cb => {
          cb(self.value)
        })
      }
    }, 0)
  }

  function reject (reason) {
    setTimeout(function () {
      if (self.status === PENDING) {
        self.reason = reason
        self.status = REJECTED
        self.onRejectCallBacks.forEach(cb => {
          cb(self.reason)
        })
      }
    }, 0)
  }

  try {
    func(resolve, reject)
  } catch (error) {
    reject.call(this, error)
  }
}

_Promise.prototype.then = function (onFulFilled, onRejected) {
  const self = this
  if (this.status === PENDING) {
    var pendingPromise = new _Promise(function (resolve, reject) {
      self.onRejectCallBacks.push(function () {
        setTimeout(function () {
          try {
            const res = onRejected(self.reason)
            reject(res)
          } catch (error) {
            reject(error)
          }
        }, 0)
      })
      self.onFulFillCallbacks.push(function () {
        setTimeout(function () {
          try {
            const res = onFulFilled(self.value)
            resolve(res)
          } catch (error) {
            resolve(error)
          }
        }, 0)
      })
    })
    return pendingPromise
  }

  if (this.status === REJECTED) {
    const rejectPromise = new _Promise(function (resolve, reject) {
      setTimeout(function () {
        try {
          const res = onRejected(self.value)
          resolve(res)
        } catch (error) {
          reject(error)
        }
      }, 0)
    })
    return rejectPromise 
  }

  if (this.status === FULFILLED) {
    const fulfillPromise = new _Promise(function (resolve, reject) {
      setTimeout(function () {
        try {
          const res = onFulFilled(self.value)
          resolve(res)
        } catch (error) {
          reject(error)
        }
      }, 0)
    })
    return fulfillPromise 
  }
}

// 同步
const p1 = new _Promise(function (resolve, reject) {
  resolve('p1')
}).then(function (result) {
  console.log(result)
})

// 异步
const p2 = new _Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve('p2')
  }, 500)
}).then(function (result) {
  console.log(result)
})

// 多个
const p3 = new _Promise(function (resolve, reject) {
  resolve('p3')
})
p3.then(function (result) {
  console.log(`${result}-1`)
})
p3.then(function (result) {
  console.log(`${result}-2`)
})

// 失败
const p4 = new _Promise(function (resolve, reject) {
  reject('p4')
}).then(function (result) {
  console.log(result)
}, function (error) {
  console.log(error)
})

// 语法错误
const p5 = new _Promise(function (resolve, reject) {
  const a = 1
  a = 2
}).then(function (result) {
  console.log('p5 success')
}, function (error) {
  console.log('p5 error')
})


