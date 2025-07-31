// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let nums = []
	
	for await (const line of rl) {
		const [a,b] = line.split(' ')
		nums.push(Number(a))
		nums.push(Number(b))
		rl.close();
	}
	const total = nums.reduce((a,c) => a + c)
	console.log(total.toFixed(6))
	process.exit();
})();
