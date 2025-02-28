function solution(s) {
    const  answer = s.split('').reduce((a,c) => {
        a.set(c, (a.get(c) || 0) + 1)
        
        return a;
    }, new Map())
    
    return [...answer].filter(([_,i]) => i === 1).map(([e]) => e).sort().join('');
}