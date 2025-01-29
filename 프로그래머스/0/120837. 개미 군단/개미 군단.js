function solution(hp) {
    let oneAnt = Math.floor(hp/5);
    let twoAnt = 0;
    let threeAnt = 0;
    if(hp % 5 !== 0){
        twoAnt = Math.floor((hp % 5) / 3)
        if((hp % 5) % 3 !== 0){
            threeAnt = Math.floor((hp % 5) % 3)
        }
    }
    return oneAnt + twoAnt + threeAnt;
}