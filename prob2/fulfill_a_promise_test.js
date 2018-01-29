const fetchData = require('./fulfill_a_promise')

test('the fetched data is FULFILLED', () => {
  expect.assertions(1)
  return fetchData().then((data) => {
    expect(data).toBe('FULFILLED!')
  })
})

test('chack if fetchData return a promise object', () => {
  const result = fetchData()
  expect(result).toBeInstanceOf(Promise)
})
