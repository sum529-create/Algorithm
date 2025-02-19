function solution(my_string) {
    let answer = my_string.split('').map(e => {
        if(e === e.toLowerCase()){
            return e.toUpperCase()
        } else {
            return e.toLowerCase()
        }
    })
    return answer.join('');
}