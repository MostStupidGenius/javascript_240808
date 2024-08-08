// 호이스팅(hoisting)
// 변수와 함수 선언이 마치 해당 범위(스코프) 최상단에서
// 선언된 것처럼 처리하는 것을 의미한다.

console.log(x);
// console.log(let_v);

var x = 30;
let let_v = 20;
console.log(x);
console.log(let_v);