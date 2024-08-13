// 주소값 개념
// 원시 자료형
// let num1 = 3;
// let num2 = num1;
// num2 += 2; // 5
// console.log(num1); // 3

// 참조 자료형
// 값을 저장하는 게 아니라, 값이 저장된 "위치(주소값)"를 저장하는 것이다.
// let arr1 = [1, 3, 2, 4];
// arr2 = arr1;
// arr2.push("added");
// console.log(arr1);
// console.log(arr2);

let 철수네집 = ["철수", "철수엄마", "철수아빠"];
let 철수엄마네집 = 철수네집.slice(); // 얕은 복사
console.log("얕은 복사");
철수엄마네집.pop(-1);
console.log(철수네집);
console.log(철수엄마네집);

console.log("깊은 복사");
철수엄마네집 = 철수네집; // 깊은 복사
철수엄마네집.pop(-1);
console.log(철수네집);
console.log(철수엄마네집);






