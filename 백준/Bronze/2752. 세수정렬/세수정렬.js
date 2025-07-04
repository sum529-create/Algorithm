let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input[0].split(' ').map(Number).sort((a,b) => a-b);
let [num1, num2, num3] = arr;

console.log(`${num1} ${num2} ${num3}`);