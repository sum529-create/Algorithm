const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const [costCnt, cost] = input[0].split(' ').map(Number);
const pay = input.slice(1).map(Number).filter(e => e <= cost).sort((a,b) => b-a);
let cnt = 0
let remain = cost;

for(let i=0; i<pay.length; i++){
    const use = Math.floor(remain / pay[i])
    if(remain === 0 || remain < 0) break;
    if(use >= 0){
      cnt += use;
      remain -= pay[i] * use;
    }
}
console.log(cnt)