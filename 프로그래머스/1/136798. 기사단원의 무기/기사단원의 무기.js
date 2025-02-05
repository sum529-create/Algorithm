function divisor(num){
    const divisorArr = []
    // 약수 구하는 로직!
    for(let i=1; i<= Math.sqrt(num); i++){
        if(num % i === 0){
            divisorArr.push(i)
            if(num/i !== i)
                divisorArr.push(num/i)
        }
    }
    return divisorArr.length;
}
function solution(number, limit, power) {
    let answer = 0;
    let tempArr = []
    
    for(let i =1; i<=number; i++){
        tempArr.push(divisor(i))
    }
    answer = tempArr.reduce((a,c)=>{
        if(c<= limit) a += c
        else a += power
        return a
    },0)
    
    return answer;
}