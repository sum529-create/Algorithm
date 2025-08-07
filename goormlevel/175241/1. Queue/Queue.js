// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let arr = []
	let N = 0;
	for await (const line of rl) {
		if (arr.length === 0) {
			const [cnt, size] = line.trim().split(' ');
			N = Number(cnt);
		}
		arr.push(line.trim());
		if (arr.length === N + 1) rl.close();
	}

	const [cnt, size] = arr[0].split(' ');
	const queue = arr.slice(1);
	let stack = [];
	let output = [];

	for (let e of queue) {
		if (e.includes('push')) {
			const [cmd, num] = e.split(' ');
			if (stack.length < Number(size)) {
				stack.push(Number(num));
			} else {
				output.push("Overflow");
			}
		} else {
			if (stack.length > 0) {
				output.push(stack[0]);
				stack.shift();
			} else {
				output.push("Underflow");
			}
		}
	}

	for (let e of output) {
		console.log(e);
	}

	process.exit();
})();
