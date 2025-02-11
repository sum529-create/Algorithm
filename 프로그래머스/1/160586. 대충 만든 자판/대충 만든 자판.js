function solution(keymap, targets) {
    let answer = Array(targets.length).fill(0);
    const myMap = new Map();
    for(let i of keymap){
        let keyArr = i.split('');
        for(let e of keyArr){
            if(myMap.has(e)){
                if(myMap.get(e) > keyArr.indexOf(e)){
                    myMap.set(e, keyArr.indexOf(e))
                }
            } else{
                myMap.set(e, keyArr.indexOf(e))   
            }
        }
    }
    for(let [idx, i] of targets.entries()){
        let tarArr = i.split('');
        for(let e of tarArr){
            if(myMap.get(e) === undefined){
                answer[idx] = -1;
                break;
            }else {
                answer[idx] += (myMap.get(e) + 1)    
            }
        }
    }
    return answer;
}