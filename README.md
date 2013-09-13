ucurry
======

Partial function application allowing arguments to be omitted out-of-order

`npm install ucurry`

then

```javascript
var ucurry = require('ucurry')

function myFunc(a,b,c,d,e) { return [a, b, c, d, e].join(' ')}

var curried = ucurry(myFunc, 1, undefined, 3, undefined, 5)

curried(2, 4) 
// '1 2 3 4 5'
```
