function prime(num){
    let primeArr = []
    for(let i = 2; i<=num; i++){
        let isPrime = true;
        for(let e = 2; e<i; e++){
            if(i % e === 0){
                isPrime = false
                break;
            }
        }
        if(isPrime) primeArr.push(i)
    }
    return primeArr
}
function solution(n) {
    return prime(n).filter(e => n%e === 0);
}