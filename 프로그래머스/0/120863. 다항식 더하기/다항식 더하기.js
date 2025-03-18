function solution(polynomial) {
    let polyArr = polynomial.split(' + ')
    let xCount = 0
    let sum = 0
    let answer = ''
    polyArr.forEach(e => {
        if(e.includes('x')){
            xCount += e.length > 1 ? Number(e.slice(0, e.length-1)) : 1
        } else{
            sum += Number(e)
        }
    })
    if(xCount && sum){
        answer = (xCount !== 1 ? xCount : '') + 'x + '+sum
    } else if(sum){
        answer = sum+''
    } else{
        answer = (xCount !== 1 ? xCount : '')+'x'
    }
    return answer
}