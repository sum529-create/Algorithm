function solution(s) {
    let halfNum = Math.round(s.length/2 - 1);
    let result;
    if(s.length % 2 === 0){
        result = s[halfNum] + s[halfNum + 1]
    } else {
        result = s[halfNum]
    }
    return result
}