let a = [1,2,3,4];
let s = 7
function subArray(){
    let freq = new Map();
    freq.set(0,-1);
    let preSum = 0
    for(let i=0;i<a.length;i++){
        preSum += a[i];

        let required = preSum -s;
        if(freq.has(required)){
            let start = freq.get(required)+1;
            let end = i;
            return [start, end]
        }

        if(!freq.has(preSum)){
            freq.set(preSum,i)
        }
    }
    return [-1,-1]
}

console.log(subArray());