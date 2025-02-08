function factorial (num){
    let sum = 1;
    for(let i=1; i<=10; i++){
        sum *= i;
        if(sum > num) return i - 1
    }
    return 10;
}
function solution(n) {
    return factorial(n);
}