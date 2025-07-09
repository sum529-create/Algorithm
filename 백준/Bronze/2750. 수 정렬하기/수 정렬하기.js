let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)
let nums = input.splice(1).sort((a,b) => a-b)
let answer = ''
for(let i=0; i<input[0]; i++){
    answer += nums[i]
    if(i+1 !== input[0]) answer += '\n'
}

console.log(answer)