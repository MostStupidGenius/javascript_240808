// 0~99까지의 수 중 짝수인 값만 출력

let limit = 100;
// 방법1
// 출력을 할 때 1을 추가해서
// 증감식까지 포함해 2를 반복마다 추가하는 방법
for (let i = 0; i < limit; i++) {
    console.log(i++);
}

// 방법2
// 증감식을 2로 설정하여
// 매 반복마다 2를 추가하는 방식
for (let i = 0; i < limit; i+=2) {
    console.log(i);
}

