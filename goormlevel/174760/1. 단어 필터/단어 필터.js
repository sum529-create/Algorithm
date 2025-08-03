// Run by Node.js
const readline = require('readline');

(async () => {
	let rl = readline.createInterface({ input: process.stdin });
	let arr = []
	for await (const line of rl) {
		arr.push(line)
		if(arr.length === 3) rl.close();
	}
	let [targetCnt, AllCnt] = arr[0].split(' ').map(Number)
	let filteredText = arr[1];
	let text = arr[2]
	let roop = Math.round(AllCnt / targetCnt)
	let modifyText = text;
	for(let i = 0; i < roop; i++){
		modifyText = modifyText.replaceAll(filteredText, '')	
	}
	
	console.log(modifyText === '' ? 'EMPTY' : modifyText)
	process.exit();
})();
