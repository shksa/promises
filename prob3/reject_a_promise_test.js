const fetchData = require('./reject_a_promise')

test('check if the promise is rejected', () => {
  expect.assertions(1)
  return fetchData().catch((error) => {
    expect(error.message).toBe('REJECTED!')
  })
})
