function solution(X, Y) {
    const xMap = new Map();
    const yMap = new Map();
    const xArr = X.split('')
    const yArr = Y.split('')
    let temp = ""
    for(let i of xArr){
        xMap.set(i, (xMap.get(i) || 0) + 1)
    }
    for(let i of yArr){
        yMap.set(i, (yMap.get(i) || 0) + 1)
    }
    for(let i=9; i>=0; i--){
        if(xMap.get(i.toString()) && yMap.get(i.toString())){
            temp += i.toString().repeat(Math.min(yMap.get(i.toString()), xMap.get(i.toString())))
        }
    }
    return temp ? (temp.replace(/0/g, "").length === 0 ? "0" : temp) : "-1"
}