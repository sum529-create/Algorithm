function solution(my_string) {
    return my_string.replace(/\D+/g, '').split('').reduce((a,c) => a+Number(c), 0);
}