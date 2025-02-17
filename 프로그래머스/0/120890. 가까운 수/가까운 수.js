function solution(array, n) {
    const sortArr = [...array].sort((a,b) => a-b)
    const arr = sortArr.map(e => {
        if(n === 0){
            return Math.abs(1 - Math.abs(e))
        }else {
            return Math.abs(n - e)   
        }
    })
    const idx = arr.indexOf(Math.min(...arr))
    return sortArr[idx];
}