function solution(s1, s2) {
    const concatArr = [...s1, ...s2]
    const filterSet = new Set(concatArr);
    return concatArr.length - Array.from(filterSet).length;
}