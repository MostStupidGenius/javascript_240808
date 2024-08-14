// 전역변수
name = 30;
function func1() {
    console.log(name);
    if(true){
        a = "a";
        inner = "inner no var";
    }
    console.log(a);
}

func1();
console.log("inner no var", inner);

// let 변수
// 선언된 블록 내에서만 사용 가능하다.
let let_ = 3;
function let_fuc() {
    // function이 let이 선언된 위치보다 안쪽에 있기 때문에
    // 여기서 사용된 let_ 변수도 사용이 가능하다.
    console.log(let_);
    if(true){
        let let_func_inner = 15;
    }
    // console.log(let_func_inner);
}

let_fuc();

console.log("=========var===========")

var variable = "var";
function var_test() {
    var variable = "inner";
    console.log(variable);
    if(true){
        var inner_var = "if_inner";
    }
    console.log("inner var use out",inner_var);
}
var_test();
console.log(variable);