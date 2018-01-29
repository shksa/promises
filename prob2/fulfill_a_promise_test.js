const fetchData = require('./fulfill_a_promise')

test('check if the fetched data is FULFILLED', () => {
  expect.assertions(1)
  return fetchData().then((data) => {
    expect(data).toBe('FULFILLED!')
  })
})

test('chack if fetchData returns a promise object', () => {
  const result = fetchData()
  expect(result).toBeInstanceOf(Promise)
})
