function solution(dots) {
    const sortX = [...dots].sort((a,b) => a[0] - b[0])
    const sortY = [...dots].sort((a,b) => a[1] - b[1])
    
    return (sortX[3][0] - sortX[0][0]) * (sortY[3][1] - sortY[0][1])
}