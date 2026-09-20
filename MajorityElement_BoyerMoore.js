let a = [2, 1, 1, 1, 1, 1, 2];

function Major(){
    
    for(let i=0;i<a.length;i++){
        let count = 0;
        
        for(let j=i;j<a.length;j++){
            if(a[i] == a[j]){
                count++
            }
        }
        
        if(count>a.length/2){
            return a[i]
        }
        
    }
}
// console.log(Major())

let b = [0, 0, 1,1,2, 2, 2, 2];

function Majortiy2(){
    
    let count = 1
    let ans = b[0]
    for(let i=1;i<b.length;i++){
        if(b[i] == b[i-1]){
            count++
         ans = b[i]
        }
        else {
            count = 1;
        }
    }
    
    if(count>=b.length/2){
        return ans
    }
    return -1;
}


// console.log(Majortiy2())

let c = [2, 1, 1, 1, 1, 1, 2];

function Maj(){
    
    let ans = 0;
    let count =0
    
    for(let i=0;i<c.length;i++){
        if(count == 0){
            ans = c[i]
            count = 1; 
        }else if(ans == c[i]){
            count++
        }else{
            count--;
        }
    }
    
    return ans
}

console.log(Maj())