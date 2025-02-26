function solution(numbers) {
    const nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    let answer = numbers;
    nums.forEach((word, i) => {
        answer = answer.replaceAll(word, i);
    });
    return Number(answer);
}