let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let a1 = readLine().split(" ");
let a2 = readLine().split(" ");
let product=1;
let add=0;
for (let i=0; i<a1.length; i++){
product = (product*0+1)* a1[i]*a2[i];
add=add + product;
}
let x= a1[1]*a2[2] - a1[2]*a2[1];
let y= a1[0]*a2[2] - a1[2]*a2[0];
let z= a1[0]*a2[1] - a1[1]*a2[0];
let ans= x-y+z;
if(add===0){
    console.log(2);
} else if(ans===0){
    console.log(1);
}else{
    console.log(0);
}


