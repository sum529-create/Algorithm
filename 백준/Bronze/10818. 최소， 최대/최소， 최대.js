let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let line = input[1] || ''

let nums = line.split(' ').map(Number)
let maxNums = Math.max(...nums)
let minNums = Math.min(...nums)

console.log(minNums + ' ' + maxNums)