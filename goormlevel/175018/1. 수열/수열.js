// Run by Node.js
const readline = require('readline');
const MOD = 1000000007;
const cal = (num) => {
	let target = [0, 1];
	if(num === 1) return 0;
	if(num === 2) return 1;
	for(let i =2; i<num; i++){
		target[i] = (target[i - 1] + target[i - 2]) % MOD;
	}
	return target[num - 1];
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let num = 0;
	let answer = 0;
	
	for await (const line of rl) {
		num = Number(line)
		if(num > 0) rl.close();
	}
	answer = cal(num)
	console.log(answer)
	process.exit();
})();
