// (흐름)제어문(flow control statement)
// 코드의 흐름을 인위적으로 바꿔서
// 특정 조건에 따라 건너건거나 실행
// 특정 조건에 따라 반복 실행
// 흐름을 제어하는 문법이다.

// 조건문
// if(조건식){
//      조건식이 참일 때 실행할 코드
// }
// 조건식은 반환값이 boolean인 값을 뜻한다.

let num1 = 30;
let num2 = 5;

if(num1 > num2) {
    console.log(num1);
}

// if else
// if문의 조건식이 거짓일 때 else의 코드를 실행한다.
// if문의 코드블록이 실행되거나, else의 코드블록이 실행되거나
// 반드시 둘 중 하나는 실행이 된다.
num1 = 20;
num2 = 5;
if(num1 > num2){
    console.log("num1 > num2 => ", num1 > num2);
} else {
    console.log("false일 때 실행되는 코드");
}

// if ~ else if ~
// if else문을 나열하여 여러 조건에 따라
// 실행한 코드블록을 찾아가는 문법이다.
num1 = 3;
num2 = 3;
if(num1 > num2){
    console.log("num1이 크다.");
} else if(num1 == num2){
    console.log("num1과 num2가 같다.");
} else {
    console.log("num1이 작다.");
}
// 조건식을 중첩하는 것이 때문에
// 조건이 포함관계가 될 수 있어서
// 여러 조건을 써야 할 때에는
// 그 포함관계와 순서에 주의해야 한다.


