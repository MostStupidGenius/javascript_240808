// 프로토타입(prototype)
// Object.create()에 객체를 전달하여
// Object 객체의 속성을 그대로 이어 받는 객체를 생성한다.
let prototypePerson = {
    greet: () => {
        console.log("안녕하세요");
    }
}
let p1 = Object.create(prototypePerson);
p1.greet();

// 예시
let car = {
    model: "",
    year: 0
}

let car1 = Object.create(car);
car1.model = "현대";
car1.year = 2021;
console.log(car1);

let proto_test = {
    run_bool: false,
    run: ()=>{
        console.log(this.run_bool);
        console.log(this.run_bool || "시동 꺼짐");
    },
    print: (text)=>{
        console.log(text);
    }
}

// new로 객체를 생성하는 방식과 달리
// this 예약어로 객체의 속성에 접근하는 방식을 사용할 수 없다.
let pt = Object.create(proto_test);
// pt.print("ㅁㄴㅇ");
globalThis.run_bool = "시동 켜짐";
console.log(pt.run_bool);
pt.run();


// 생성자 함수와 프로토타입
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// prototype 프로퍼티에 접근하여
// Person 프로토타입에 새로운 프로퍼티나 메서드를 추가할 수 있다.
// 이렇게 추가된 정보는 Person을 객체화하는 모든 인스턴스에서
// 동일하게 적용된다.
Person.prototype.introduce = function() {
    console.log("hello", this.name, "입니다.\n"+
        "나이는 ", this.age, "입니다.");
}

let hong = new Person("홍길동", 30);
hong.introduce();
hong.address = "역삼역";
console.log(hong.address);