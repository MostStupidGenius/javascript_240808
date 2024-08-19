// String 객체
// 문자열을 다루기 위한 메서드들을 정의해놓은 객체

// .length
// 문자열의 길이를 반환
console.log("hello world".length); // 11

// .toUpperCase(), .toLowerCase()
// 모든 영문자를 대문자로 바꾸거나
// 소문자로 바꾸는 기능
let text = "Hello, World";
console.log(text.toUpperCase()); // "HELLO, WORLD"
console.log(text.toLowerCase()); // "hello, world"

// .split(구분자 문자열)
// 지정된 구분자를 기준으로 하여 문자열을 나눈 뒤
// 배열로 반환한다.
console.log(text.split("")); // ['H', 'e', 'l', 'l','o', ',', ' ', 'W','o', 'r', 'l', 'd']
console.log(text.split(",")); // ['Hello', ' World']
console.log(text.split("o")); // [ 'Hell', ', W', 'rld' ]
console.log(text.split("l")); // [ 'He', '', 'o, Wor', 'd' ]

// .trim()
// 문자열의 앞뒤 공백을 제거한 새 문자열을 반환
text = "  Hello, World  \t\n";
console.log(".", text.trim(), ".");

console.log(text.trim()[0]);

let trim_text = text.trim();
for (let i = 0; i < trim_text.length; i++) {
    const e = trim_text[i];
    if(e >= 'a' && e <= 'z'){
        // 소문자는 대문자로
        trim_text[i] = e.toUpperCase();
    } else if(e >= 'A' && e <= 'Z'){
        // 대문자를 소문자로
        trim_text[i] = e.toLowerCase();
    }
}
console.log(trim_text);


