// 함수
// 미리 정해진 동작을 수행하도록 만들어 놓은 기능 부품
// 기능을 수행하는 데에 필요한 값을 전달받아서
// 필요하다면 함수가 사용된 위치에 반환된 값을 대입/치환할 수 있다.

function print(text) {
    // console.log(text);
    console.log(text || "hello");
    return;
}

// print("hello world");
print();

console.log("=================");
// 함수 선언
// 변수 var처럼 hoistiong이 된다.
console.log(greet("홍")); // hoisting
function greet(name) {
    return "안녕하세요, " + name + "!";
    console.log("return 이후");
}
let greetingText = greet("홍길동");

console.log(greetingText);

// console.log(fun_adder(1, 3)); // Ref error
// 함수 표현식
// 상수 선언인 const를 사용하기 때문에
// hoistiong 되지 않는다.
const fun_adder = function(num1, num2) {
    return (Number)(num1) + (Number)(num2);
};

console.log(fun_adder("30", 5));

// 화살표 함수
// ES6에서 도입
// (param1, param2) => {코드}
const arrow_func = (param)=> param + "!";
console.log(arrow_func(3));

// 반환하는 값을 바로 적을 수 있고,
// 다른 코드 없이 한 줄로 적을 수 있을 때,
// 중괄호를 생략하고 반환할 값만 적더라도
// 잘 반환된다.
const adder = (x=10, y=10) => x + y;
console.log(adder());


// 스코프(scope)
// 변수가 선언된 영역을 벗어나지 못한다는 개념이다.
// 함수 내에서 선언된 변수(저장공간)는 함수 바깥과는
// 서로 별개의 존재이다.
// 함수 안과 밖은 변수 선언에 서로 영향을 끼치지 못한다.
let variable = 3;
function var_text() {
    var variable = 30;
    console.log(variable);
}
var_text();
console.log(variable);

