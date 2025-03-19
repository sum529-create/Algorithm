function solution(n) {
    let threeCnt = 0
    let i = 1;
    let x = n
    while(i<=x){
        if((i !== 1 && i % 3 === 0) || i.toString().includes('3')){
            threeCnt++
            x++
        }
        i++   
    }
    return n + threeCnt;
}