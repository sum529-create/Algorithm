const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const persons = input[1].split(' ').map(Number).sort((a,b) => a-b);
let arr = []
let num = 0
for(let i of persons){
    num += i
    arr.push(num)
}
let total = arr.reduce((a,c) => a+c)
console.log(total)