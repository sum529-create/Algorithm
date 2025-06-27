let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let num = Number(input[0])
let answer = ''

for(let i = 1; i<10; i++){
    answer += `${num} * ${i} = ${num * i}` + '\n'
}

console.log(answer)