// 객체 리터럴(Object Literal)
// 키와 값을 직접 설정하는 방식의
// 가장 직관적인 객체 생성 방식이다.
let car_sonata = {
    brand: "현대",
    model: "소나타",
    year: 2021
}
console.log(car_sonata.brand);

// 생성자 함수(Constructor Function)
// 여러 개의 객체를 만들 때 사용하는,
// 일종의 설계도를 미리 만들어놓는 방식이다.
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

// 원시 타입
// number, string, boolean
// 값 자체를 다루는 타입
num = 3;
num2 = num; // 3
num += 2; // 5
console.log("num2 :", num2);

// 참조 타입
// 값이 아니라 위치(주소)를 저장하는 개념이다.
// 서로 다른 참조 변수가 같은 주소를 가리키면,
// 가리키는 대상을 변경했을 때,
// 각각의 참조변수 입장에서는 값이 변경된 상태로 똑같이 보인다.

let sonata = new Car("현대", "소나타");
let sonata_alt = sonata;

sonata.year = 2021;
console.log(sonata.year);
console.log(sonata_alt.year);

sonata_alt.year = 2030;
console.log(sonata.year);
console.log(sonata_alt.year);
