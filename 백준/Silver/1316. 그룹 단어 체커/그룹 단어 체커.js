let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let cnt = Number(input[0]);
let answer = 0;

for(let i=1; i<=cnt; i++){
    let stack = [];
    let pre = ''
    let isGroup = true;
    for(let e of input[i]){
        if((pre && pre !== e) && stack.includes(e)){
            isGroup = false;
            break;
        }
        stack.push(e);
        pre = e;
    }
    if(isGroup) answer++;
}

console.log(answer);