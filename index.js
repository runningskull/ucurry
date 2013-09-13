var slice = Array.prototype.slice

function _arrfill(arr, fill) {
  var ind=0, replace = function(i){ return i===undefined ? fill[ind++] : i }
  return arr.map(replace).concat(slice.call(fill, ind))
}

// allows out-of-order arguments by using `undefined`
module.exports = function(fn) {
  var preset=slice.call(arguments, 1), self=this
  return function(){ return fn.apply(self, _arrfill(preset, arguments)) }
}

