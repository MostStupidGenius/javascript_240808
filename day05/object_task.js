// RegExp
// 정규표현식
// 특정 패턴을 가진 문자열을 검색하기 위한 표현식이다.
// 모든 표현식을 알 필요는 없고
// 필요하면 인터넷에서 검색해서 사용하면 된다.

// / -> 찾고자 하는 문자열을 감싸는 역할.
// i -> 앞에 나온 문자열의 대소문자를 구분하지 않음.
const regex = /hello/i;
// .test(검사할 문자열)
// -> 정규표현식에 해당하는 문자열이 검사할 문자열 안에
// 존재하는지 여부를 true/false로 반환하는 함수다.
console.log(regex.test("Hello, world\nhelLo")); // true

// .exec() // execute 실행하다
// 정규표현식에 해당하는 문자열을 찾고,
// 첫번째로 찾은 문자열에 대한 정보를 배열로 반환한다.
// 찾은 문자열이 없으면 null을 반환한다.
const text = "Hello, world\nheLLO, HelLo";
const match = regex.exec(text);
console.log(match[0]); // Hello


// .replace(regex, newSubstr)
// 정규표현식에서 가리키는 문자열을 발견할 경우
// 처음으로 발견한 문자열을 newSubstr으로 교체한다.
new_text = text.replace(regex, "Hi");
// new_text = new_text.replace(regex, "Hi");
// new_text = new_text.replace(regex, "Hi");
console.log(new_text);


console.log(text.replace("e", "2"));