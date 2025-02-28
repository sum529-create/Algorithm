function solution(s) {
    const  answer = s.split('').reduce((a,c) => {
        a.set(c, (answer.get(c) || 0) + 1)
        return a;
    }, [new Map()])
    
    return answer;
}