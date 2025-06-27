let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let [num1, num2, num3] = input[0].split(' ').map(Number);

if(num1 === num2 && num2 === num3){
    console.log(10000 + num1 * 1000)
}else if(num1 === num2 || num1 === num3 || num2 === num3){
    const equalNum = (num1 === num2 || num1 === num3) ? num1 : num2
    console.log(1000 + equalNum * 100)
}else {
    const maxNum = Math.max(num1, num2, num3)
    console.log(maxNum * 100)
}