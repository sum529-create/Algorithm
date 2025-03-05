function solution(my_string) {
    const strArr = my_string.split(' ').map(e => (e !== '+' && e !== '-') ? +e : e)
    return strArr.reduce((a,c,i) => {
        if(c === '+'){
            a += strArr[i+1]
        } else if(c === '-'){
            a -= strArr[i+1]
        }
        return a
    },strArr[0])
}