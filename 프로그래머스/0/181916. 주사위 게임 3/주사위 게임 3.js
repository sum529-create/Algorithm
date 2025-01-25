function solution(a, b, c, d) {
    const tempArr = [a,b,c,d];
    const tempMap = new Map();
    for(let i of tempArr){
        tempMap.set(i, (tempMap.get(i) || 0) + 1)
    }
    const arr = Array.from(tempMap)
    
    if(arr.length === 1){
        return Number(tempArr[0]) * 1111
    } else if(arr.length === 2){
        if(arr[0][1] === arr[1][1]){
            const p = arr[0][0];
            const q = arr[1][0];
            return (p+q) * Math.abs(p - q)
        } else {
            const res = arr.sort((a,b) => b[1] - a[1])
            const p = res[0][0];
            const q = res[1][0];
            return Math.pow(10 * p + q, 2)
        }
    } else if(arr.length === 3){
        const res = arr.sort((a,b) => b[1] - a[1])
        return res[1][0] * res[2][0]
    } else {
        return Math.min(...tempArr)
    }
}