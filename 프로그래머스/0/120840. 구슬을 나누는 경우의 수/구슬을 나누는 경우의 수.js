function factorial(num){
    // if(num === 0 || num === 1) return 1;
    // return num * factorial(num - 1)
    let result = 1n;
    for(let i =2n; i<=BigInt(num); i++){
        result *= i;
    }
    return result;
}
function solution(balls, share) {
    if(balls < share) return 0;
    return factorial(balls) / (factorial(balls - share) * factorial(share));
}