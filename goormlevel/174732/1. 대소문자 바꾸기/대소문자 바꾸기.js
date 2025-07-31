// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let arr = []
	for await (const line of rl) {
		arr.push(line)
		rl.close();
	}
	let str = arr[1];
	let answer = ''
	for(let i of str){
		if(i.toUpperCase() === i){
			answer += i.toLowerCase()
		} else {
			answer += i.toUpperCase()
		}	
	}
	console.log(answer)
	process.exit();
})();
