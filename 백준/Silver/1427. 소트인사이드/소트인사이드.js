const fs = require('fs');
const arr = fs.readFileSync('/dev/stdin').toString().trim().split('');

const sortArr = arr.sort((a,b) => Number(b)-Number(a)).join('');

console.log(sortArr);