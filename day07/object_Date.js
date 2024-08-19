// 날짜 표준 객체 Date
// 날짜와 시간을 다루기 위해 사용되는 표준 객체이다.
// new Date() 객체화를 통해서 사용한다.

// 현재 날짜와 시간에 해당하는 객체 생성
const now = new Date();

console.log(now);

// .get~
// FullYear() 연
// 연도를 반환한다.
console.log(now.getFullYear()); // yyyy

// Month() 월 // MM
// Date() 일
console.log(now.getDate()); // dd

const weeks = ["일요일", "월요일", "화요일",];
// Day() 요일
// console.log(now.getDay());

// 리스트를 이용해서 현재 요일 출력
console.log(weeks[now.getDay()]); 

// Hours() 시 hh
// 24시간제를 사용한다.

// Minutes() 분 // mm

// Seconds() 초 // ss

