var ucurry = require('../index')

var tests = exports.tests = {}

tests.testUcurry = function(test) {
  var testfn = function(a,b,c,d,e){ return [a,b,c,d,e].join(' ') }
    , curried = ucurry(testfn, 1, undefined, 3, undefined, 5)

  test.equal(curried(2,4), '1 2 3 4 5')
  test.done()
}

