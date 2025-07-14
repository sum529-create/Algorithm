const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const arr = input.slice(1);
let sortArr = []
let answer = '';

for(let i=0; i<arr.length; i++){
    const [age, name] = arr[i].split(' ');
    sortArr.push([Number(age), name, i])
}

sortArr.sort((a,b) => {
    if(a[0] !== b[0]) return a[0] - b[0]
    else return a[2] - b[2]
})

for(let e=0;e <sortArr.length; e++){
    const [age, name, i] = sortArr[e]
    answer += age + " " + name;
    if(e !== sortArr.length - 1){
        answer += "\n"
    }
}
console.log(answer.trim())