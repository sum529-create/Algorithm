function solution(my_string) {
    let filterArr = ['a', 'e', 'i', 'o', 'u']
    return my_string.split('').filter(e => !filterArr.includes(e)).join('')
}