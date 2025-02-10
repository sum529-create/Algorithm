function solution(s) {
    let answer = 0;
    let splitArr = s.split('')
    let idx = 0;
    let sameCnt = 1, diffCnt = 0;
    for(let i=1;i<s.length; i++){
        if(sameCnt === diffCnt){
            answer++;
            sameCnt = 1;
            diffCnt = 0;
            splitArr.splice(idx,1)
        } if(splitArr[idx] !== splitArr[idx+1]){
            diffCnt++;
            splitArr.splice(idx+1, 1)
        } else if (splitArr[idx] === splitArr[idx+1]){
            sameCnt++;
            idx++;
        }
        if(i === s.length - 1){
            if(sameCnt === 1 || sameCnt > 1 && diffCnt > 1){
                answer++;
            }
        }
    }
    return answer === 0 ? 1 : answer;
}