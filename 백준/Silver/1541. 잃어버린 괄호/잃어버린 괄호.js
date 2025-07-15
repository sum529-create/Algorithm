const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();

if(input.includes('-')){
  const numArr = input.split('-').map(e => {
     if(e.includes('+'))
      return e.split('+').map(Number).reduce((a,c) => a+c);
     else return Number(e)
  }) 
  console.log(numArr.reduce((a,c) => a-c))
} else {
    console.log(input.split('+').map(Number).reduce((a,c) => a+c));
}