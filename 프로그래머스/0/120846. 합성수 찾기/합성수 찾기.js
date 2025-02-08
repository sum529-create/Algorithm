function measure(num){
    let cnt = 0;
    for(let i=1; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            cnt++;
            if(num / i !== i) cnt++
        }
    }
    return cnt;
}
function solution(n) {
    let answer = 0;
    for(let i=1; i<=n; i++){
        measure(i) > 2 ? answer++ : null
    }
    return answer;
}