let fs = require('fs');
let input =fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let cnt = Number(input[0]);
let scores = input[1].split(' ').map(Number);
let maxScore = Math.max(...scores);
let newScores = scores.map(e => e/maxScore * 100)
let newAvg = newScores.reduce((a,c) => a+c, 0)/cnt

console.log(newAvg)