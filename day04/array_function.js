let fruits = ["apple", "banana", "cherry"];

// splice(start, number, 새 요소)
// start번째 방부터 number개 만큼의 요소를 지우고
// 새 요소를 start번째 방에 넣는 기능이다.
// 실행이 된 이후, 제거된 요소들을 반환한다.
// 원본 배열은 건드리지 않는다.
let deleted = fruits.splice(1,2, "orange", "grape");

console.log("line9", fruits); // [ 'apple', 'orange', 'grape' ]
console.log("line10", deleted); // [ 'banana', 'cherry' ]

// slice()
fruits = ["apple", "banana", "cherry"];
let slicedFruits = fruits.slice();
// 전달하는 값이 없으면 전체 복사
console.log("sliced : ", slicedFruits); // [ 'apple', 'banana', 'cherry' ]
console.log("fruits : ", fruits); // [ 'apple', 'banana', 'cherry' ]

// slice(start, end)
// 전달하는 값이 있는 경우
// start번째 방부터 end-1번째 방까지의 요소를
// 복사하여 반환한다.
console.log("1, 2");
slicedFruits = fruits.slice(1, 2);
console.log("sliced : ", slicedFruits); // [ 'banana' ]
console.log("fruits : ", fruits); // [ 'apple', 'banana', 'cherry' ]

// 전달하는 값이 음수인 경우
// -1은 마지막 요소를 뜻한다.
// 뒤에서 -start번째 방의 요소부터
// 뒤에서 -end-1번째 방까지의 요소를 복사한다.
fruits = ["apple", "banana", "cherry", "peach", "watermelon"];
slicedFruits = fruits.slice(-3, -1);
console.log(slicedFruits); // [ 'cherry', 'peach' ]

// sort()
// 배열을 정렬하는 기능으로
// 전달하는 값을 함수 형태로 정렬 방법을 전달하는 것이다.
// 전달하는 값이 없다면, 기본정렬방식인 오름차순으로
// 정렬한다.
// 원본 배열을 정렬, 수정한다.
fruits = ["banana", "apple", "peach", "cherry", "watermelon"];
let sorted = fruits.sort();
console.log("sort :", fruits);
// [ 'apple', 'banana', 'cherry', 'peach', 'watermelon' ]
sorted.pop()
console.log("line48", fruits);
// [ 'apple', 'banana', 'cherry', 'peach' ]
// reverse()
// 배열 요소의 순서를 뒤집는 기능으로
// 반환되는 값은 배열 그 자체를 반환한다.
fruits = ["banana", "apple", "peach", "cherry", "watermelon"];
let temp_arr = fruits.reverse();
console.log(fruits); // [ 'watermelon', 'cherry', 'peach', 'apple', 'banana' ]
temp_arr.sort();
console.log("====================");
console.log("fruits :", fruits); // [ 'apple', 'banana', 'cherry', 'peach', 'watermelon' ]
console.log("temp :", temp_arr); // [ 'apple', 'banana', 'cherry', 'peach', 'watermelon' ]
temp_arr.pop();
console.log("fruits :", fruits); // [ 'apple', 'banana', 'cherry', 'peach' ]







