let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let num = parseInt(input[0]);

    if (num >= 90) return console.log('A');
    else if (num >= 80) return console.log('B');
    else if (num >= 70) return console.log('C');
    else if (num >= 60) return console.log('D');
    else return console.log('F');
