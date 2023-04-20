let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// let arr=[]
// let a= readLine().split(" ");
 
// for(i=a.length-1; i>=0;i--){
//   arr.push(a[i]);
// }
// console.log(arr);
//-------------------------------

// let arr=[]
// let a= readLine().split(" ");
// for(i=0; i<=a.length-1; i++){
//   arr.unshift(a[i]);
// }
// console.log(arr);
//------------------------------

let a= readLine().split(" ");
let s=0;
let e = a.length-1;
while(s<= e ){
    let temp = a[s];
    a[s]=a[e];
    a[e]= temp;
    s= s+1;
    e=e-1;
}
console.log(a);