function solution(survey, choices) {
    let answer = [];
    let newMap = new Map();
    let mbtiArr = [['R', 'T'], ['C', 'F'], ['J', 'M'], ['A', 'N']]
    for(let [i, e] of survey.entries()){
        const typeSur = e.split('');
        if(choices[i] > 4){
            newMap.set(typeSur[1], (newMap.get(typeSur[1]) || 0) + (choices[i] - 4))
        } else if(choices[i] < 4){
            newMap.set(typeSur[0], (newMap.get(typeSur[0]) || 0) + (4 - choices[i]))
        }
    }
    for(let i of mbtiArr){
        if(newMap.has(i[0]) && newMap.has(i[1])){
            if (
                (newMap.get(i[0]) > newMap.get(i[1])) || 
                (newMap.get(i[0]) === newMap.get(i[1]))
            ) {
                answer.push(i[0])
            } else {
                answer.push(i[1])
            }
        } else if(newMap.has(i[0]) || newMap.has(i[1])){
            answer.push(newMap.has(i[0]) ? i[0] : i[1])
        } else {
            answer.push(i[0])
        }
    }
    return answer.join('');
}