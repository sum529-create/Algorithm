function solution(today, terms, privacies) {
    let termsMap = new Map();
    let [todayYear, todayMonth, todayDay] = today.split('.').map(Number);

    terms.forEach(e => {
        let [type, period] = e.split(' ');
        termsMap.set(type, Number(period));
    });

    return privacies.reduce((acc, privacy, i) => {
        let [date, type] = privacy.split(' ');
        let [year, month, day] = date.split('.').map(Number);
        let period = termsMap.get(type);

        let totalMonths = month + period;
        year += Math.floor((totalMonths - 1) / 12);
        month = (totalMonths - 1) % 12 + 1;
        day -= 1; 

        if (day === 0) { 
            month -= 1;
            day = 28;
            if (month === 0) {
                month = 12;
                year -= 1;
            }
        }

        if (
            todayYear > year || 
            (todayYear === year && todayMonth > month) || 
            (todayYear === year && todayMonth === month && todayDay > day)
        ) {
            acc.push(i + 1);
        }
        
        return acc;
    }, []).sort((a, b) => a - b);
}
