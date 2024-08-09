// switch
// 주어진 변수의 값을 특정 상수값과 비교하여
// 해당되는 상수값인 경우에 해당 위치에서
// 코드를 실행하기 시작한다.
const value1 = 1;
const value2 = 2;
const value3 = 3;
let key = 99;

switch (key) {
    case value1:
        console.log(1);
        // break;
    case value2:
        console.log(2);
        break;
    case value3:
        console.log(3);
        break;
    default:
        console.log(0);
        break;
}