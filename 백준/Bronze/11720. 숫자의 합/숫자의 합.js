let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let nums = input[1].split('').map(Number)
let total = nums.reduce((a,c)=>a+c,0);
console.log(total)