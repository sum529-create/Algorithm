function solution(numbers, direction) {
    let saveNum = 0;
    let answer = [...numbers]
    if(direction === "right"){
        answer.pop()
        saveNum = numbers[numbers.length - 1]
        answer.unshift(saveNum)
    } else {
        answer.shift()
        saveNum = numbers[0]
        answer.push(saveNum)
    }
    
    return answer;
}