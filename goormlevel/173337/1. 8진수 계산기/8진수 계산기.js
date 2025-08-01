// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let arr = []
	for await (const line of rl) {
		arr.push(line)
		if(arr.length === 2)rl.close();
	}
	let answer = arr[1].split(' ').reduce((a,c) => Number(a) + Number(c));
	console.log(answer.toString(8))
	process.exit();
})();
