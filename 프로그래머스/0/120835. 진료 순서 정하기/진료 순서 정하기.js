function solution(emergency) {
    let sortArr = [...emergency].sort((a,b) => b-a)
    let answer = emergency.map(e => sortArr.indexOf(e)+1)
    return answer;
}