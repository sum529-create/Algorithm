function solution(n) {
    let count = 0;
    for(let i=0; n >= i * i; i++){
        if(n % i === 0){
            count += 2
            if(i * i === n){
                count--
            }
        }
    }
    return count;
}