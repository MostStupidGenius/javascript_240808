let arrScores = [
    70, 80, 
    55, 45,
    30, 90
];

// 배열의 각 요소를 출력하고
// 그 합을 구한 뒤 출력
// 평균을 구한 뒤 출력
let sum = 0;

for (let e of arrScores) {
    sum += e;
}
console.log(sum);
console.log(sum/arrScores.length);

