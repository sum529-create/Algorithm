let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let num = Number(input[0]);
let answer = '';

for(let i=0; i<num; i++){ 
 for(let e=0; e<=i; e++){
   answer += '*'
 }
  answer += '\n'
}

console.log(answer)