let fs =require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
console.log(input.filter(e => e.trim() !== "").length);