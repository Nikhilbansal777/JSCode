let a = [1,8,6,2,5,4,8,3,7]

//     let maxArea = a[0]
// for(let i=0;i<a.length;i++){
//     for(let j=i+1;j<a.length;j++){
//         let width = j-i;
//         let height = a[i]
//         if(a[j]<height){
//             height = a[j]
//         }
        
//         let area = height * width;
        
//         if(area > maxArea){
//             maxArea = area
//         }
//     }
// }

// console.log(maxArea)

// using 2 pointer

let left = 0;
let right = a.length-1;
let max = 0

while(left < right){
    let width = right - left;
    let minHeight;
    if ( a[left] < a[right]){
        minHeight  = a[left]
    }else{
        minHeight = a[right]
    }
    let area = width * minHeight
    if(area > max){
        max = area;
    }
    
    if(a[left]<a[right]){
        left++
    }else{
        right--
    }
}

console.log(max)