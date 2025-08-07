// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let arr = ""
	for await (const line of rl) {
		arr = line.trim()
		if(arr.length > 1) rl.close();
	}
	let [cal1, cal2] = arr.split(' ');
	let sumA = eval(cal1);
	let sumB = eval(cal2);
	console.log(sumA >= sumB ? sumA : sumB)
	process.exit();
})();
