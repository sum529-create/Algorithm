function solution(numbers, k) {
    let answer = 0;
    for(let i =0; i<k-1; i++){
        answer = (answer + 2) % numbers.length
    }
    return numbers[answer];
}