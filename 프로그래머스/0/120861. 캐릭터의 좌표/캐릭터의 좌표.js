function solution(keyinput, board) {
    let answer = [0,0];
    let checkPoint = [Math.floor(board[0]/2), Math.floor(board[1]/2)]
    for(let e of keyinput){
        switch(e){
            case 'left':
                if(answer[0] > -checkPoint[0]) answer[0] -= 1
                break;
            case 'right':
                if(answer[0] < checkPoint[0]) answer[0] += 1
                break;
            case 'up':
                if(answer[1] < checkPoint[1]) answer[1] += 1
                break;
            case 'down':
                if(answer[1] > -checkPoint[1]) answer[1] -= 1
                break;
        }
    }
    return answer;
}