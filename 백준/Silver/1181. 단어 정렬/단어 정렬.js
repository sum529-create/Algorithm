let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let strArr = input.slice(1);
let uniqueArr = [...new Set(strArr)];
uniqueArr.sort((a,b) => {
    if(a.length !== b.length) return a.length - b.length;
    let char1 = a.toUpperCase();
    let char2 = b.toUpperCase();
    if(char1 < char2) return -1;
    else if(char1 > char2) return 1;
    else return 0;
});
console.log(uniqueArr.join('\n'));