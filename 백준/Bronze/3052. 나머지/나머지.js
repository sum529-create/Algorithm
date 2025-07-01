let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let newArr = input.map(e => e%42);
let newSet = [...new Set(newArr)];

console.log(newSet.length)