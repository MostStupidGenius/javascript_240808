// 사칙연산
// +, -
// *, /
// 곱셈과 나눗셈은 덧셈, 뺄셈보다 먼저 연산된다.
// 왼쪽에서부터 연산한다.
// 계산결과가 정수로 딱 떨어지지 않으면 소수점까지 표현된다.
// ★정수 / 정수 는 실수가 될 수 있다.

// 문자열이 포함된 덧셈
// 문자열과 다른 값이 +로 연산되면
// 두 값이 붙은 형태로 문자열이 된다.
let num = 3;
let strTxt = "Hello";

console.log(num + strTxt);
console.log('hello ' + 'world');
// ====================================
// 나머지 연산자
// 값1 % 값2 => 값1을 값2로 나눈 나머지를 구하는 연산자다.
let value1 = 9;
let value2 = 2;
console.log("9 % 2 = ", 9 % 2); // 1

// =====================================
// 대입 연산자
// =
// 좌변에 저장공간(변수, 상수)을 두고 대입 연산자를 사용,
// 우변에 저장공간에 담을 값을 놓는다.
// 저장공간 = 값

// 복합 할당 연산자(대입 연산자의 확장)
// 사칙연산과 대입연산자를 합친 연산자
// +=, -=, *=, /=
let num2 = 3;
num2 = num2 + 2; // 3 + 2
num2 += 2;

num2 -= 2; // num2 = num2 - 2;
num2 *= 3; // num2 = num2 * 3;
num2 /= 5; // num2 = num2 / 5;
num2 %= 3; // num2 = num2 % 3;

// =====================================
// 증감 연산자
// 변수++ 변수--
// 1을 더하거나 빼고 대입하는 연산을 하는 단항연산자다.
let num3 = 5;
num3++; // num3 += 1;
console.log(num3++); // 사용 후 값을 1 증가 시킨다. => 후위 연산
console.log(++num3); // 값을 1증가 시킨 후 사용한다.=> 전위 연산

//======================================
// 비교 연산자
// 두 값을 비교하여 참 또는 거짓을 반환하는 연산자다.
// 동등 연산자
// 값이 같은지만 비교
console.log("3 == '3' =>", 3 == '3'); // true
// 동일 연산자
// 값과 자료형이 같은지 비교
console.log("3 === '3' =>", 3 === '3'); // false

// 부등 연산자
// !=, !==
console.log(3 != 'a'); // true
console.log(3 !== '3'); // true

// 크기 비교
// 이상, 이하
console.log(3 <= 5); // 3이 5보다 작거나 같니?(이하이니?)
console.log(3 >= 1); // 3이 1보다 크거나 같니?(이상이니?)

// 초과, 미만
console.log(3 < 5); // 3이 5보다 작니?(미만이니?)
console.log(3 > 1); // 3이 1보다 크니?(초과이니?)

// ===========================
// 논리 연산자
// AND, OR, NOT
// 두 값의 true, false에 따라 그 결과를 true, false로 반환
// AND
// 두 값이 모두 true이면 true
// 하나라도 false이면 false
console.log(true && true); // true

// OR
// 둘 중 하나라도 true이면 true
// 모두 false이면 false
console.log(false || true); // true

// NOT
// 단항 연산자로, 값의 앞에 붙어서 해당 boolean값을
// 반전시킨다.
console.log(!true); // false
console.log(!false); // true
// console.log(!!true); // true

// =============================
// 삼항 연산자
// 항이 세 개
// 조건식의 결과에 따라 반환하는 값이 달라지는 연산자
// 조건식 ? 참일 때 값 : 거짓일 때 값
console.log(3 > 1 ? 30 : 10); // 30

// 연산순위
// 최우선 연산자
// 단항 연산자
// 이항 연산자
// 삼항 연산자
// 대입 연산자(할당 연산자)



// 기타 연산자
// 자료형 검사
// typeof
// 해당 변수 값의 자료형을 문자열 값으로 반환한다.
let f = "Hello";
console.log(typeof f); // "string"
let n = 30;
console.log(typeof n); // "number"
// "boolean"

// instanceof
// 객체가 특정 클래스의 인스턴스 여부인지를 반환한다.
// true/false
// 배열/객체
let arr = [1, 2, 3];
console.log(arr instanceof Array); // true
