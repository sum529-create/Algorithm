function solution(keymap, targets) {
    let answer = Array(targets.length).fill(0);
    const minPressCount = new Map();
    
    // 각 키맵의 문자별 최소 입력 횟수 계산
    for (let keyboard of keymap) {
        for (let i = 0; i < keyboard.length; i++) {
            const char = keyboard[i];
            // 현재 문자의 입력 횟수가 더 작은 경우에만 업데이트
            if (!minPressCount.has(char) || minPressCount.get(char) > i + 1) {
                minPressCount.set(char, i + 1);
            }
        }
    }
    
    // 각 target 문자열 처리
    for (let [idx, target] of targets.entries()) {
        for (let char of target) {
            // 입력 불가능한 문자 발견 시 즉시 중단
            if (!minPressCount.has(char)) {
                answer[idx] = -1;
                break;
            }
            answer[idx] += minPressCount.get(char);
        }
    }
    
    return answer;
}