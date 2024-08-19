// Array 객체
// isArray -> boolean
// 전달된 객체가 배열인지 여부를 반환하는 메서드다
// 전달된 객체가 배열이라면 true, 아니라면 false 리턴
console.log(Array.isArray([3, 2, 23])); // true
console.log(Array.isArray("d")); // false
// if(Array.isArray("d")){
//     console.log("is array");
// } else {
// }

// push -> number
// 하나 이상 전달된 값을 해당 배열의 끝에 추가한다.
// 추가된 상태의 배열 길이를 리턴
let arr1 = [1, 3, 2, 5];
console.log(arr1.push(3, 4)); // arr1의 길이 6 리턴

// pop
// 마지막 요소 제거 후 제거된 요소 리턴
arr1 = [1, 3, 5];
console.log(arr1.pop()); // 마지막 요소 5 리턴
console.log(arr1);

console.log("===============");

// map(callback)
// 각 요소에 대해서 전달된 콜백함수를 실행한 결과를
// 새로운 배열의 요소로 재구성하여 리턴한다.
arr1 = [1, 3, 5, 7];
let map_made_arr = arr1.map((e, i)=>e + 1);
console.log(map_made_arr); // [ 2, 4, 6, 8 ]
map_made_arr = arr1.map((e, i)=>i + ". " + e);
console.log(map_made_arr); // [ '0. 1', '1. 3', '2. 5', '3. 7' ]

// filter(callback)
// 전달된 콜백함수의 결과가 true인 요소만 골라서
// 새로운 배열을 만든다.
arr1 = [1, 2, 3, 4, 5];
map_made_arr = arr1.filter((e,i)=>e % 2 == 0);
console.log(map_made_arr); // [ 2, 4 ]

console.log("===============");

arr1 = ["hello", 2, 3, [1, 3, 5], true, "world", false, "4", "", []];
/* 
    // 숫자가 아닌 요소들만 새로운 배열로 만든다.
    map_made_arr = arr1.filter((e, i)=>Number.isInteger(e));
    console.log(map_made_arr); // [ 2, 3 ]

    // Number.isInteger()는 전달된 값이 타입과 그 값이
    // 정수인지 여부를 반환하는 메서드다.
*/

map_made_arr = arr1.filter(
    // (e, i)=>Array.isArray(e) // 배열인 요소
    // [[ 1, 3, 5 ]]
    // (e, i) => i % 2 == 0 // 짝수번째 요소
    // [ 'hello', 3, true, false, '' ]
    (e, i) => e // 값이 있는 경우, true
    // [ 'hello', 2, 3, [ 1, 3, 5 ], true, 'world', '4', [] ]
);
console.log(map_made_arr);

// reduce(callback, init_val)
// 각 요소에 대해 각각 콜백함수를 실행하고,
// 실행한 그 결과 값이 다음 함수의 매개변수(param)로
// 전달되어 누적 실행 된다.
// 최종 값은 
// init_val은 시작값
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // 총합 55

// 이전 요소와 현재 요소의 합을 누적 연산한 값을 리턴
let result = arr1.reduce(
    (acc, num, i)=>acc + num
    , 0
); 
console.log(result);
