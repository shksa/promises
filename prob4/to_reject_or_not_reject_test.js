const fetchData = require('./to_reject_or_not_reject')

test('check if fetchData returns a promise object', () => {
  const result = fetchData()
  expect(result).toBeInstanceOf(Promise)
})

test('check if the promise is fulfilled', () => {
  expect.assertions(1)
  return fetchData().then((data) => {
    expect(data).toBe('I FIRED')
  })
})
