let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let cnt = Number(input[0]);

for(let i=1;i<=cnt; i++){
    let numArr = input[i].split(' ').map(Number)
    let numCnt = numArr[0];
    let score = numArr.slice(1)

    let numAve = (score.reduce((a,c) => a + c, 0)) / numCnt
    let overAve = score.filter(e => e > numAve);
    let percent = ((overAve.length / score.length) * 100).toFixed(3) ;
    console.log(percent + '%')
}

