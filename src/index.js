const uniqueRandomArray = require('unique-random-array')
const randomizingNames = require('./randomizing-names.json')

const mainExport = {
  all: randomizingNames,
  random: uniqueRandomArray(randomizingNames),
}

module.exports = mainExport // for CommonJS compatibility
