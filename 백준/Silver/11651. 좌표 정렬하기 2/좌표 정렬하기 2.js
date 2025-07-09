let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');
let cnt = Number(input[0]);

let arr = []
for(let i=1; i<=cnt; i++){
    let [num1, num2] = input[i].split(' ').map(Number);
    arr.push([num1, num2])
}
arr.sort((a,b) => {
    if(a[1] !== b[1]) return a[1] - b[1]
    return a[0] - b[0]
})
let answer = ""
for(let i of arr){
    answer += i[0] + " " + i[1] + "\n"
}
console.log(answer)