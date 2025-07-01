let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let cnt = Number(input[0]);
for(let i=1; i<=cnt; i++){
    let splitArr = input[i].split(' ');
    let splitCnt = Number(splitArr[0]);
    let splitStr = splitArr[1];
    let answer = ''
    for(let a of splitStr){
        answer += a.repeat(splitCnt)
    }
    console.log(answer)
}

