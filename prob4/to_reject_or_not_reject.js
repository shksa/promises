const promise = new Promise((fulfill, reject) => {
  fulfill('I FIRED')
  reject(Error('I DID NOT FIRE'))
})

const onFulfilled = msg => console.log(msg)
const onRejected = error => console.log(error.message)

promise.then(onFulfilled, onRejected)
