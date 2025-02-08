function solution(n, lost, reserve) {
    let resArr = reserve.filter(r => !lost.includes(r));
    let lostArr = lost.filter(l => !reserve.includes(l));
    let answer = n - lostArr.length;

    lostArr.sort((a, b) => a - b);

    for (let i of lostArr) {
        if (resArr.includes(i)) {
            resArr.splice(resArr.indexOf(i), 1);
            answer++;
        } else if (resArr.includes(i - 1)) {
            resArr.splice(resArr.indexOf(i - 1), 1);
            answer++;
        } else if (resArr.includes(i + 1)) { 
            resArr.splice(resArr.indexOf(i + 1), 1);
            answer++;
        }
    }

    return answer;
}
