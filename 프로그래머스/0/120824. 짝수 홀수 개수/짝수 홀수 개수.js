function solution(num_list) {
    let answer = [0,0];
    num_list.forEach(e => {
        if(e % 2=== 0) answer[0]++
        else answer[1]++
    })
    return answer;
}