// 정규표현식
// 문자열의 특정 단어 검색, 치환, 추출
const regex = /hello/;

// 정규표현식과 일치하는 문자가 있는지 여부를 반환
// .text("") -> boolean
console.log(regex.test("hello world"));

// .match("") -> []
// 정규표현식과 일치하는 문자들을 배열형태로 반환.
const regex2 = /[(hello)(hi)]/;
console.log("hello hi world".match(regex2));