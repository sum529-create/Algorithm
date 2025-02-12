function solution(s, skip, index) {
    let answer = '';
    let skipSet = new Set(skip);

    for (let char of s) {
        let charCode = char.charCodeAt(0);
        let count = 0;

        while (count < index) {
            charCode++;
            if (charCode > 122) { // 'z'를 넘으면 다시 'a'로
                charCode = 97;
            }
            if (!skipSet.has(String.fromCharCode(charCode))) {
                count++;
            }
        }
        answer += String.fromCharCode(charCode);
    }

    return answer;
}
