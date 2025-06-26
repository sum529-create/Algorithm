let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n')

let num1 = parseInt(input[0])
let num2 = input[1]
let splitNum = num2.split('')

let answer = '';

for(let i=splitNum.length-1; i>=0; i--){
    answer += num1 * parseInt(splitNum[i]) + '\n'
}
answer += num1 * parseInt(num2)

console.log(answer)