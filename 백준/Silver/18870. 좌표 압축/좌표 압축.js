const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const arr = input[1].split(' ').map(Number);
let answer = ''

let sortArr = [...new Set([...arr].sort((a,b) => a-b))]
let dirMap = new Map();

sortArr.forEach((e, i) => dirMap.set(e,i))

for(let i of arr){
    const cnt = dirMap.get(i)
    answer += cnt + ' '
}
console.log(answer)