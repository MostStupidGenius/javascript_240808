// 객체 배열
// 배열에 여러 개의 객체를 담을 경우
// 인덱스로 접근 후 .을 이용하여
// 프로퍼티나 메서드에 접근할 수 있다.
// 혹은 for of를 이용하여
// 각 요소를 가져온 후
// 그 요소에 .을 이용하여 속성을 사용할 수 있다.

function Person(id, name) {
    this.id = id;
    this.name = name;
}

let people = [
    new Person(1, "홍길동"),
    new Person(2, "김철수"),
    new Person(3, "이영희")
]

for (const person of people) {
    console.log(person.id, " : ", person.name);
}

console.log(people[1].name);