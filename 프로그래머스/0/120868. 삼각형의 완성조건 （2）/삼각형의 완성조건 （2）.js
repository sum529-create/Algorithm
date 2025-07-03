function solution(sides) {
    let [num1, num2] = sides;
    let maxNum = Math.max(num1, num2);
    let minNum = Math.min(num1, num2);
    let targetNum = maxNum - minNum;
    let concatNum = num1 + num2
    let numArr = new Set()
    for(let i = targetNum+1; i<=maxNum; i++){
        numArr.add(i)
    }
    for(let i = maxNum; i<concatNum;i++){
        numArr.add(i)
    }
    
    return [...numArr].length;
}