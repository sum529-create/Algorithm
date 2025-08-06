const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];
rl.on('line', (line) => {
  input.push(line.trim());
  if (input.length === 2) {
    rl.close();
  }
});

rl.on('close', () => {
  const [cnt, mul] = input[0].split(' ').map(Number);
  const nums = input[1].split(' ').map(Number);

  const answer = nums.map(num => (num % mul === 0 ? num : num * mul));
  console.log(answer.join(' '));
});
