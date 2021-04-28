
Promise.retry = function (fn, limits) {
  return new Promise (async function (resolve, reject) {
    while (limits > 0) {
      try {
        const es = await fn()
        resolve(es)
        limits = 0
      } catch (error) {
        limits--
        console.log(limits)
        if (!limits) {
          reject(error)
          
        }
      }
    }
  })
}


// 兼容写法 存在问题 换种思路
Promise.retry = function (fn, limits) {
  return new Promise (function (resolve, reject) {
    while (limits > 0) {
      try {
        var res = fn()
        if (res instanceof Promise) {
          res.then(resolve).catch((function (error) {
            throw new Error(error)
          }))
        } else {
          resolve(res)
          limits = 0
        }
      } catch (error) {
        limits--
        if (!limits) {
          reject(error)
        }
      }
    }
  })
}


Promise.retry = function (fn, limits) {
  return new Promise (function (resolve, reject) {
    try {
      var res = fn()
      if (res instanceof Promise) {
        res.then(resolve).catch((function (error) {
          console.log(limits)
          limits--
          if (limits > 0) {
            Promise.retry(fn, limits).then(resolve).catch(reject)
          } else {
            reject(error)
          }
        }))
      } else {
        resolve(res)
      }
    } catch (error) {
      if (!limits) {
        reject(error)
      } else {
        console.log(limits)
        limits--
        if (limits > 0) {
          Promise.retry(fn, limits).then(resolve).catch(reject)
        } else {
          reject(error)
        }
      }
    }
  })
}
var a = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(1)
    }, 1000);
  })
}
Promise.retry(a, 10)

