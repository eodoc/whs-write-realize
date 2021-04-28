Promise.retry = function (promise, times = 2) {
  return new Promise(function (resolve, reject) {
    function resolvePromise () {
        return new Promise(function (resolve, reject) {
            try {
                promise.then(function (res) {
                resolve(res)
                }, function (error) {
                console.log('error', error)
                throw new Error('123')
                })
            } catch (error) {
                reject(error)
            }
        })
    }
    while (times--) {
    resolvePromise().then(function (res) {
        resolve(res)
      }).catch(function (error) {
        console.log('reject' + times)
        if (!times) {
          reject(error)
        } else {
            return resolvePromise()
        }
      })
    }
  })
}


// 参数为 function
Promise.retry = (promiseFn, times = 3) => new Promise(async (resolve, reject) => {
    while (times--) {
        try {
            var ret = await promiseFn()
            resolve(ret)
            break
        } catch (error) {
            console.log(times + error)
            if (!times) {
                reject(error)
            }
        }
    }
})

Promise.retry(() => { return new Promise((resolve, reject) => {
  setTimeout(() => Math.random() > 0.9 ? resolve('success') : reject('error'), 1000)
}) }, 3).then(data => console.log(data), error => console.log(error))


// 参数为 Promise
Promise.retry = (promise, times = 3) => new Promise(async (resolve, reject) => {
    while (times--) {
        try {
            var ret = await promise
            resolve(ret)
            break
        } catch (error) {
            console.log(times + error)
            if (!times) {
                reject(error)
            }
        }
    }
})

Promise.retry(new Promise((resolve, reject) => {
    setTimeout(() => {
        debugger
        if (Math.random() > 0.9) {
            resolve('success')
        } else {
            reject('error')
        }
    }, 1000)
}), 3).then(data => console.log(data), error => console.log(error))