function solution(s) {
    var answer = 0;
    let splitArr = s.split(' ')
    answer = splitArr.reduce((a,c,i) => {
        if(c === 'Z'){
            a -= Number(splitArr[i-1])
        } else{
            a += Number(c)    
        }
        return a; 
    },0)
    return answer;
}