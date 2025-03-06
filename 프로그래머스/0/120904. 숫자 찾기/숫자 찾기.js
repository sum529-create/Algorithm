function solution(num, k) {
    const result = num.toString().split('').indexOf(k+'')
    return result === -1 ? -1 : result+1
}