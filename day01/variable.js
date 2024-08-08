// 주석
// 코드를 실행할 때 무시되는 부분으로
// 일반적으로 코드에 대한 설명이나
// 코드를 사용할 때 필요한 정보들을 기재하는 곳이다.

// 변수
// var를 가장 앞에 적어서
// 변수를 선언함을 알리고
// 변수명을 적어 선언을 한다.
var name; // 선언

// 선언과 초기화는 같은 변수명에 대해서 여러번 할 수 있다.
var name = 10; // "값을 할당했다"

var init = 10 // "선언과 초기화를 했다"고 말한다.

// 자료형
// 숫자형, 문자형, 논리형
var variable = 10; // 숫자형->정수
variable = 3.5; // 숫자형->실수
variable = "문자형"; // '(작은따옴표), "(큰따옴표), `(백틱)로
// 감싸져 있는 값들
variable = true; // 참
variable = false; // 거짓


// 정적 할당
// 코드를 쓰는 순간부터(컴파일) 변수(저장공간)와 그 값에 대한
// 자료형이 정해지는 할당 방식을 이야기한다.

// 동적 할당
// 코드를 실행한 순간(런타임)에 변수와 값에 대한 자료형이 정해진다.
// 그렇기 때문에 변수에는 타입이 정해지지 않은 상태로 코드를 작성하게 된다.
// 변수에는 타입과 무관하게 아무 값이나 들어갈 수가 있다.

// typescript -> 찍먹

// 변수 사용 예제
var name = "홍길동";

// 출력
// 확인하고자 하는 값을 콘솔창에 출력하는 기능이다.
// 넘겨주는 값을 기본적으로 하나이지만,
console.log(name);

// 반점(,)을 이용하여 여러 값을 넘겨주고 각 값 사이에 띄어쓰기 넣어 출력할 수도 있다.
console.log(name, 30, "값");

// 혹은 여러 값을 하나로 연결해서 출력하고 싶다면
// 연산자 +를 문자형 값과 같이 쓰면 연결된다.
console.log(name + 30 + "값");

// 범위 주석
/*
    범위 주석은 여러 줄에 걸쳐 주석을 처리해야 할 때 사용한다.
    주의점은, 중첩하여 범위 주석을 쓸 수는 없다.
*/









