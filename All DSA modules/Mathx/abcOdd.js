let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let arr = readLine().split(" ").map(Number)
let A=arr[0]
let B=arr[1]
let product = A*B
let result
for(let i =1; i<=3; i++){
    if ((product*i)%2!==0){
        result= "Yes"
    }else{
        result="No"
    }
}
console.log(result)