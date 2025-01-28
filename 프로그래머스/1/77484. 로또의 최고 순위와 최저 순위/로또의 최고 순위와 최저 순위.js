function solution(lottos, win_nums) {
    const rank = [6,6,5,4,3,2,1];
    let minCount = lottos.filter(n => win_nums.includes(n)).length;
    let zeroCount = lottos.filter(n => !n).length;
    const maxCount = minCount + zeroCount;
    return [rank[maxCount], rank[minCount]];
}