const asyncLog = (callback) => {
  const wrapper = () => {
    callback('TIMED OUT!')
  }
  setTimeout(wrapper, 300)
}

module.exports = asyncLog
