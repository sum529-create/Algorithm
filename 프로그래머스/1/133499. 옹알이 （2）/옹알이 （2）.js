function solution(babbling) {
    const lang = ["aya", "ye", "woo", "ma"]
    let answer = 0;
    for(let i of babbling){
        let temp = i;
        let prev = ''; // 얘는 이미 검사했으니까, 배열에서 제외하셈
        
        while(temp.length > 0){
            let found = false; // lang에 없으니까 다음거 킵고잉하셈
            for(let e of lang){
                if(temp.startsWith(e) && prev !== e){
                    temp = temp.slice(e.length)
                    prev = e;
                    found = true;
                    break;
                }
            }
            if(!found) break;
        }
        if(temp.length === 0){
            answer++;
        }
    }
    return answer;
}