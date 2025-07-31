// Run by Node.js
const readline = require('readline');
const MOD = 1000000007
function factorial(n){
	let result = 1;
	for(let i=2; i<=n; i++){
		result = (result * i) % MOD
	}
	return result;
}

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let num = 0
	for await (const line of rl) {
		num = factorial(Number(line))
		rl.close();
	}
	console.log(num)
	process.exit();
})();
