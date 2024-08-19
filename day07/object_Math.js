// Math 표준 객체
// 생성자 함수가 아니기 때문에
// new 키워드를 사용해서 객체화할 수 없다.
// 때문에, Math.--- 방식으로만 객체의 속성, 메서드를
// 사용해야만 한다. -> 정적(static)으로 제공된다.

// .round()
// 가장 가까운 정수형 값을 반환하는 반올림 메서드
console.log(Math.round(3.49999999)); // 반올림해서 3

// .ceil() : 올림
// 소수점 아래 자리수가 0보다 크다면,
// 올림하여 정수 부분에 1을 더한다.
console.log(Math.ceil(3.000000001)); // 3 + 1

// .floor() : 내림, 버림
// 소수점 아래 자리수의 값을 버린다.
console.log(Math.floor(7.99999)); // 7

// .random()
// 0 이상 1 미만의 난수를 반환
console.log(Math.random());
// console.log(Math.floor(Math.random() * 10));

// .max(...vaules)
// 주어진 여러 값들 중 가장 큰 값을 반환한다.
console.log(Math.max(1, 3, 5, 9.12));

// .min(...vaules)
// 주어진 여러 값들 중 가장 작은 값을 반환한다.
console.log(Math.min(-2, 1, 3, 5, 9));

// 제곱근
// 주어진 숫자의 제곱근을 실수형으로 반환한다.
// 결과값에 소수점이 없으면 정수형으로 반환된다.
console.log(Math.sqrt(2));