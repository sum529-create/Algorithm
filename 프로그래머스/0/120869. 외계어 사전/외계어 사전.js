function solution(spell, dic) {
    let answer = 0;
    for(let [i,e] of dic.entries()){
        let cnt = 0
        for(let z of spell){
            if(e.includes(z)){
                cnt++
            } else {
                cnt--
            }
        }
        if(cnt === e.length){
            answer = 1
        }
        if(answer !== 1){
            answer =2
        }
    }
    return answer;
}