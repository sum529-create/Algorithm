function solution(lottos, win_nums) {
    const rank = [6,6,5,4,3,2,1]
    const minLevel = lottos.filter(e => win_nums.includes(e)).length
    const maxLevel = lottos.filter(e => e === 0).length + minLevel
    return [rank[maxLevel], rank[minLevel]]
}