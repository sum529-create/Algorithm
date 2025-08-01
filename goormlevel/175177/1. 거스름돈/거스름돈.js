// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let num = 0;
	let count = 0;
	for await (const line of rl) {
		num = Number(line)
		if(num > 0) rl.close();
	}
	while(num > 0){
		if(num >= 40){
			count += Math.floor(num / 40);
			num %= 40;
		} else if(num >= 20){
			count += Math.floor(num / 20);
			num %= 20;
		} else if(num >= 10){
			count += Math.floor(num / 10);
			num %= 10;
		} else if(num >= 5){
			count += Math.floor(num / 5);
			num %= 5;
		} else{
			count += num
			num = 0;	
		}
	}
	console.log(count)
	process.exit();
})();
