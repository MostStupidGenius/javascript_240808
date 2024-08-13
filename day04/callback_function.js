// 콜백함수(callback)
// 함수에 전달되는 함수를 콜백함수라고 한다.
// 바깥함수의 파라미터로 내부함수를 전달하여
// 내부함수의 사용을 바깥함수의 내부에서 한다.
function outter(name, callback) {
    var greet_text = callback(name);
    console.log(greet_text);
}

function make_greet_text(name) {
    return name + " 안녕하세요.";
}

outter("홍길동", make_greet_text);
// outter("홍길동", (name) => name + " 안녕하세요.");

