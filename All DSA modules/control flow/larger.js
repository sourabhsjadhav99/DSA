let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
//let num = readLine().split(" ");
// let num1=num;
// for(let i=0;i<num.length;i++){
//     for(let j=i+1;j<num.length;j++){
//       if(num[i]>num[j]){
//         let temp = num[i];
//         num[i]=num[j];
//         num[j]=temp;
//       }
//     }
//     return num[0];
//   }
// //  
//   console.log(...num[0]);
//----------------------------------------
let num = readLine().split(" ");
let min =num[0];
for(let i=1;i<num.length;i++){
  if (min>num[i]){
min= arr[i];
  }
}
console.log(min);