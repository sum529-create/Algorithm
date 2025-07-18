const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let num = Number(input[0]);
let flag = false;
let answer = 0;

while(num >= 0){
    if(num === 0 || num % 5 === 0){
        answer += Number(num / 5);
        flag = true
        console.log(answer)
        break;
    }
    num -= 3;
    answer++;
}
if(!flag) console.log(-1)