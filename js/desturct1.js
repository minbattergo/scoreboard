//array destruct assignment : 배열 해체 할당
var a, b, rest;
[a, b, rest=1] = [10, 20]; //순서대로 들어간다, default parameter 'rest=1' (es6에서 적용)
//MDN default parameter 검색

console.log('a =[', a);
// expected output: 10

console.log('a =[', b);
// expected output: 20

console.log('rest =[', rest);

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);