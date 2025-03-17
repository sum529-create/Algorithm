function solution(numbers) {
    let maxArr = [...numbers].sort((a,b) => b-a)
    let minusArr = [...numbers].filter(e => e < 0).sort((a,b) => b - a)
    let maxTotal, minusTotal
    if(!minusArr.length > 0) return maxArr[0] * maxArr[1]
    if(maxArr.length > 1){
        maxTotal = maxArr[0] * maxArr[1]    
    }
    if(minusArr.length > 1){
        minusTotal = minusArr[0] * minusArr[1]
    } else{
        minusTotal = minusArr[0] * maxArr[0]
    }
    return Math.max(maxTotal, minusTotal);
}