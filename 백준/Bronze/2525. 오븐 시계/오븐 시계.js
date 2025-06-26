let fs = require('fs')
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let hour = parseInt(input[0].split(' ')[0]);
let min = parseInt(input[0].split(' ')[1]);

let addMin = parseInt(input[1]);
let newHour = 0;
let newMin = 0;

if(addMin + min >= 60){
    newHour = parseInt((addMin + min) / 60);
    newMin = addMin + min - (60 * newHour)
}
let resultHour = (hour + newHour) % 24;

console.log(addMin + min >= 60 ? resultHour + ' ' + newMin : hour + ' ' + (min + addMin))
