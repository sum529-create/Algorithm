function solution(my_string) {
    let num = ''
    let ansArr = [...my_string]
    let answer = ansArr.reduce((a,c, i) => {
        num += !isNaN(Number(c)) ? c : ''
        if(isNaN(Number(c)) || (i === ansArr.length - 1)){
            a += Number(num)
            num = 0
        }
        return a;
    },0)
    return answer;
}