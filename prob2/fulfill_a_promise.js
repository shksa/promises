// const promise = new Promise((fulfill, reject) => {
//   const getMsg = () => fulfill('FULFILLED!')
//   setTimeout(getMsg, 300)
// })

// promise.then(console.log)

const fetchData = () => {
  const promise = new Promise((fulfill, reject) => {
    const getMsg = () => fulfill('FULFILLED!')
    setTimeout(getMsg, 300)
  })

  return promise
}

module.exports = fetchData
