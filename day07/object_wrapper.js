// 전역 객체(global object)
// Node.js 환경에서는 전역 객체가 global이다
// html과 같은 문서를 통한 환경에서는 브라우저를 가리키는
// window가 전역 객체다.

// var 혹은 let, const와 같은 변수 혹은 상수 선언 없이
// 값을 대입해야 전역 객체의 변수로 들어간다.
var globalVar = 4;
// console.log(window.globalVar); // Node.js 환경에서는 RefError 발생
console.log(global.globalVar);

// 전역객체는 웹개발 기준으로, 주로 파일 경로(root 경로)를
// 전역객체로 담아서 사용한다
// 자주 쓰는 문서 요소를 전역 객체에 담아 쓴다.

// 래퍼 객체(wrapper object)
// 원시타입(number, string, boolean)을 다루기 위해
// 임시로 사용되는 객체로, 이러한 원시타입의 값에 대한
// 여러가지 속성과 메서드를 사용하기 위해서 이용된다.