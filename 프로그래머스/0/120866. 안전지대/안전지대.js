function solution(board) {
    let answer = [];
    let aroundArr = []
    let boardLen = board.length * board[0].length
    for(let i=0; i<board.length; i++){
        for(let j=0; j<board[i].length; j++){
            if(board[i][j] === 1){
                answer.push([i,j])
            }
        }
    }
    if(answer.length === 1){
        return boardLen - 9 < 0 ? 0 : boardLen - 9
    } else if(answer.length === boardLen){
        return 0
    } else {
        for(let i of answer){
            const [x, y] = i
            aroundArr.push([x-1, y-1], [x-1, y], [x-1, y+1], [x, y-1], [x,y], [x,y+1], [x+1, y-1], [x+1, y], [x+1, y+1])
        }
    }
    aroundArr = [...new Set(aroundArr.map(JSON.stringify))].map(JSON.parse).filter(e => e[0] >= 0 && e[1] >= 0 && e[0] <board.length && e[1] < board.length)
    console.log(aroundArr)
    return boardLen - aroundArr.length;
}