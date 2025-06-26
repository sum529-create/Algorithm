let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let text = input[0].split(' ');
let a = parseInt(text[0]);
let b = parseInt(text[1]);
let answer = '';

let add = a + b;
let minus = a - b;
let mul = a * b;
let div = parseInt(a / b);
let last = a % b;

answer += add + '\n' + minus + '\n' + mul + '\n' + div + '\n' + last;

console.log(answer);