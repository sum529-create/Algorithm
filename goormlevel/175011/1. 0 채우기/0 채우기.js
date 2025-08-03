// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let arr = [];
	for await (const line of rl) {
		arr.push(...line.trim().split(' '))
		if(arr.length > 1){
			const cnt = Number(arr[0])
			if(cnt + 1 === arr.length) rl.close();
		}
	}
	arr = arr.map(Number);
	let target = arr[0];
	let squareArr = arr.slice(1);
	let zeroIdx = squareArr.indexOf(0)
	let positionX = 0;
	let positionY = 0;
	let positionArr = squareArr.map((value,i) => {
		let newVal = {
			x: positionX,
			y: positionY,
			value
		}
		if(positionY > 0 && (positionY + 1) % target === 0){
			positionY = 0
			positionX++;
		} else {
			positionY++;	
		}
		return newVal
	})
	let {x, y} = positionArr[zeroIdx];
	let answer = positionArr.map((e,i) => {
		if(e.x === x || e.y === y) return Number(e.value)
		return 0
	})
	console.log(answer.reduce((a,c) => a+c))
	process.exit();
})();
