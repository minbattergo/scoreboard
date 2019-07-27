//Object destructuring assignment : 객체 해체 할당

var o = {p: 42, q: true}; // 키값별로 할당된다
var {q, p, x=1} = o; // 키값별로 할당된다 : default parameter로 쓸수있다.

console.log(p); // 42
console.log(q); // true
console.log(x); //undefined