const promise = new Promise((fulfill, reject) => {
  const gotError = () => {
    reject(Error('REJECTED!'))
  }

  setTimeout(gotError, 300)
})

const onFulfilled = undefined
const onRejected = (error) => {
  console.log(error.message)
}

promise.then(onFulfilled, onRejected)
