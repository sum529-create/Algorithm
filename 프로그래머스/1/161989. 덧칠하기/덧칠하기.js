function solution(n, m, section) {
    let count = 0;
    let lastPainted = 0;
    for(let i of section){
        if(i > lastPainted){
            count++;
            lastPainted = m + i - 1
        }
    }
    return count;
}