function solution(box, n) {
   return box.reduce((a,c) => a * Math.floor(c/ n), 1)
}