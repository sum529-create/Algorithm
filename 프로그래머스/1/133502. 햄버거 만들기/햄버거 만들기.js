function solution(ingredient) {
    let stack = [];
    let cnt = 0;
    
    for (let i of ingredient) {
        stack.push(i);  // 스택에 재료 추가
        
        // 스택 길이가 4 이상일 때만 체크 (빵-야채-고기-빵 패턴을 확인하기 위해)
        if (stack.length >= 4) {
            // 마지막 4개의 값이 1, 2, 3, 1 인지 확인
            if (stack[stack.length - 4] === 1 &&
                stack[stack.length - 3] === 2 &&
                stack[stack.length - 2] === 3 &&
                stack[stack.length - 1] === 1) {
                cnt++;
                // 햄버거가 완성되면 마지막 4개의 재료를 제거
                stack.pop();
                stack.pop();
                stack.pop();
                stack.pop();
            }
        }
    }
    
    return cnt;
}