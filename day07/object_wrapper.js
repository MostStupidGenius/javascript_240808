// 전역 객체(global object)
// Node.js 환경에서는 전역 객체가 global이다
// html과 같은 문서를 통한 환경에서는 브라우저를 가리키는
// window가 전역 객체다.

// var 혹은 let, const와 같은 변수 혹은 상수 선언 없이
// 값을 대입해야 전역 객체의 변수로 들어간다.
var globalVar = 4;
// console.log(window.globalVar); // Node.js 환경에서는 RefError 발생
console.log(global.globalVar);

// 래퍼 객체(wrapper object)
// 