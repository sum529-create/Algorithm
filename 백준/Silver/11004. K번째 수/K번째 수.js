let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let info = input[0].split(' ').map(Number);
let cnt = info[0]
let rank = info[1] - 1

let nums = input[1].split(' ').map(Number).sort((a,b) => a-b);

console.log(nums[rank])