// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let arr = []
	for await (const line of rl) {
		arr.push(line.trim())	
		if (arr.length === 2) rl.close();
	}
	let scoreArr = arr[1].split(' ').map(Number);
	arr = scoreArr.map((val,i) => ({val, idx: i+1}))
	let sortArr = [...arr].sort((a,b) => b.val - a.val);
	let answer = sortArr.slice(0,3).map(e => e.idx).join(' ')
	console.log(answer)
	process.exit();
})();
