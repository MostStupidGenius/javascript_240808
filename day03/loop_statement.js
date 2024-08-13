// 반복문
// 특정 코드를 반복적으로 실행하기 위해 묶어서 정의하는
// 문법이다.

let value = 3;

// while문
// 몇 번을 반복할지 알 수 없을 때 사용한다.
// 조건문이 true이거나 값이 있는 경우에
// 해당 반복문을 반복적으로 실행한다.
//      0 아닌 값, 빈문자열이 아닌 값

// 무한루프에 걸리지 않기 위해 조건식을 잘 주어서
// 탈출할 경우를 만들어줘야 한다.
while (value) {
    console.log("내부", value);
    value = '';
}
console.log("탈출", value);

// while 실습
var limit = 100;
var sum = 0;
while (true) {
    sum += limit--;
    if(limit==0) break;
}
console.log(sum);

// while (true) {
//     limit--;
//     console.log(limit);
//     limit *= limit; 
//     console.log(limit);
//     if(limit > 1000){
//         break;
//     }
// }

// for문
// 몇 번을 반복할지 알고 있을 때 사용한다.
// 반복횟수를 제한하고 싶을 때 사용한다.
for (let i = 0; i < 10; i++) {
    console.log(i);
}

