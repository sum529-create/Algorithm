function solution(wallpaper) {
    let lux = Infinity, luy = Infinity;
    let rdx = -Infinity, rdy = -Infinity;
    for(let [i, e] of wallpaper.entries()){
        const firstIdx = e.indexOf('#')
        const lastIdx = e.lastIndexOf('#')
        if(firstIdx !== -1 && lastIdx !== -1){
            lux = Math.min(lux, i)
            luy = Math.min(luy, firstIdx)
            rdx = Math.max(rdx, i)
            rdy = Math.max(rdy, lastIdx)
        }
    }
    return [lux, luy, rdx+1, rdy+1]
}