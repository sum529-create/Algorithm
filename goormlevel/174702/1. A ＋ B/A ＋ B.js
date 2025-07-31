// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let answer = []
	for await (const line of rl) {
		let [a, b] = line.split(' ')
		answer.push(Number(a))
		answer.push(Number(b))
		rl.close();
	}
	const total = answer.reduce((a,c) => a + c)
	console.log(total)
	process.exit();
})();
