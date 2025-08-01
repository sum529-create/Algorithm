// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let arr = [];
	let start = 0;
	let count = 0;
	for await (const line of rl) {
		arr.push(line)
		if(arr.length > 0){
			let len = Number(arr[0])
			if(len === arr.length) rl.close();
		}
	}
	let timeArr = arr.slice(1).map(e => {
		const [start, end] = e.split(' ');
		return {
			start:Number(start),
			end:Number(end),
			dif: Number(end) - Number(start)
		}
	})
	timeArr.sort((a,b) => {
		if(a.end !== b.end)
			return a.end - b.end
		else
			return a.dif - b.dif
	});
	for(let a of timeArr){
		if(a.start > start){
			start = a.end;
			count++;
		}
	}
	console.log(count)
	
	process.exit();
})();
