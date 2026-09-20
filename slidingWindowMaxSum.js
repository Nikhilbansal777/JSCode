let a = [3,5,2,4,5,2,3,4,3]
// output = 11

let k = 3
let maxSum =0;
let subSet = []
for(let i =0;i<=a.length-k;i++){
    let sum = 0
    for(let j=i;j<i+k;j++){
        subSet.push(a[j])
        sum = sum + a[j];
    }
    console.log(subSet)
    if(sum>maxSum){
        maxSum = sum;
    }
}
console.log(maxSum)