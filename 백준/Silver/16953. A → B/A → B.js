const fs =require('fs');
let [num, total] = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number)
let answer = 1

while(total !== num){
    let totalArr = total.toString().split('');
    let lastNum = totalArr[totalArr.length - 1];
    if(Number(lastNum) === 1){
        totalArr.pop();
        answer++;
        total = Number(totalArr.join(''));
    } else{
        total /= 2;
        answer++;  
    }
    
    if(total < num) {
        answer = -1
        break;
    }
}

console.log(answer);