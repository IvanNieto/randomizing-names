const expect = require('chai').expect
const randomizingNames = require('.')
describe('randomizing-names', () => {
  it('should have a list of all available names', () => {
    expect(randomizingNames.all).to.satisfy(isArrayOfStrings)
  })

  it('should allow me to get a random name from the list', () => {
    expect(randomizingNames.random()).to.satisfy(isIncludedIn(randomizingNames.all))
  })
})

function isArrayOfStrings(array) {
  return array.every(i => typeof i === 'string')
}

function isIncludedIn(array) {
  return item => array.includes(item)
}
