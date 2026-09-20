let a = [1,3,4,5,0]
// output 2

// 0+n - case 1 if array contains 0 we will take length only
let l = a.length
let sum = (l*(l+1))/2
let actualSum = 0
for(let i=0;i<a.length;i++){
    actualSum += a[i]
}
console.log(sum, actualSum)
let missingNum = sum-actualSum;
console.log(missingNum)

// 1+n - case 1 if array doesnt contains 0 we will take length + 1 then
let m = a.length+1
let ssum = (l*(l+1))/2
let aactualSum = 0
for(let i=0;i<a.length;i++){
    aactualSum += a[i]
}
let missingNumber = ssum-aactualSum;
console.log(missingNumber)

// short
console.log((a.length*(a.length+1))/2-a.reduce((total, current)=> total+current, 0))