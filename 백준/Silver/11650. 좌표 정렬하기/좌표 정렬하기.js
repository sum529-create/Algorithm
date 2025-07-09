let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let cnt = Number(input[0])
let data = []

for(let i=1; i<= cnt; i++){
    let [a,b] = input[i].split(' ').map(Number)
    data.push([a,b])
}

data.sort((a,b) => {
    if(a[0] !== b[0]) return a[0] - b[0]
    else return a[1] - b[1]
})

let answer = ""
for(let i of data){
    answer += i[0] + " " + i[1] + "\n"
}
console.log(answer)