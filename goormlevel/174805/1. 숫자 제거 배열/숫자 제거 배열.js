const readline = require('readline');

(async () => {
    let rl = readline.createInterface({ input: process.stdin });
    let arr = [];
    let lineCount = 0;

    for await (const line of rl) {
        arr.push(...line.split(' '));
        lineCount++;
        if (lineCount === 2) rl.close();
    }

    let numArr = arr.slice(2);
    let num = arr[1];
    let count = 0;

    for (let i of numArr) {
        if (!i.includes(num)) {
            count++;
        }
    }

    console.log(count);
    process.exit();
})();
