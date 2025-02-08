function factorial (num){
    let sum = 1;
    let maxFac = 0;
    for(let i=1; i<=10; i++){
        sum *= i;
        if(num === sum) return i
        else if(num > sum) maxFac = i
        else return maxFac
    }
}
function solution(n) {
    return factorial(n);
}