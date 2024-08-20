// 예외 처리(Exception Handling)
try {// 에러를 감지할 코드 블록
    console.log(num1);
} catch (error) { // 에러가 발생했을 때, 실행할 코드 블록
    // console.error(error);
} finally { // 에러 발생 여부와 무관하게, 항상 마지막에 실행되는 코드블록
    console.log("파이널리 블록");
}