const readline = require('readline');

(async () => {
	const rl = readline.createInterface({ input: process.stdin });
	const arr = [];
	let totalLines = 0;

	for await (const line of rl) {
		const nums = line.trim().split(' ').map(Number);
		arr.push(...nums);

		// 첫 줄에서 전체 개수 파악
		if (arr.length >= 2 && totalLines === 0) {
			totalLines = arr[1]; // 두 번째 값이 개수
		}

		// 입력 다 받았으면 닫기
		if (arr.length - 2 === totalLines) {
			rl.close(); // ✅ 이 타이밍에 닫아야 해!!
		}
	}

	const [target, _, ...nums] = arr;

	const set = new Set();
	let count = 0;

	for (const num of nums) {
		if (num <= target) {
			set.add(num);
		}
		count++;
		if (set.size === target) break;
	}

	console.log(set.size === target ? count : -1);
	process.exit();
})();
