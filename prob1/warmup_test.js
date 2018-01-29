const asyncLog = require('./warmup')

describe('suite1', () => {
  test('', (done) => {
    const callback = (data) => {
      expect(data).toBe('TIMED OUT!')
      done()
    }
    asyncLog(callback)
  })
})
