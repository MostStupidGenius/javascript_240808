// Number 래퍼 객체
// .isNaN(val)
// Not-a-Number 타입인지 여부를 검사 후 결과를 boolean으로 반환하는 
// 메서드다.

console.log(Number.isNaN(NaN));

// .parseInt(val)
// 정수형으로 변환
// .parseFloat(val)
// 실수형으로 변환
// parse: 분석하다
// 전달된 값을 Int(Number 타입 중 정수)타입인지
// 분석하여 그 타입으로 변환된 값을 반환하는 메서드다.

// 처음으로 등장하는 숫자를 정수 혹은 실수로 반환하고
// 이후 숫자가 아닌 타입이 등장하면 그 뒷부분의 값은 모두 버려진다.
console.log(Number.parseInt("32aa2sdasd"));
console.log(Number.parseFloat("3.141592asd1234"));

console.log(Number.parseFloat("45.asd23"));
console.log(Number.parseInt("3.14asd242"));

// 자바스크립트에서 표현할 수 있는 가장 큰 수와 가장 작은 수(상수)
// .MAX_VALUE
// .MIN_VALUE
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

