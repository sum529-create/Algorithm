let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number)

let maxNum = Math.max(...input);
console.log(maxNum);

let index = input.findIndex(e => e=== maxNum)
console.log(index + 1)