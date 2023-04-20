let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
// let given = readLine().split(" ");
// let num1 = parseInt(given[0]);
// let num2 = parseInt(given[1]);
// let sum =0;
// if(num1 + num2<=12){
//     sum= sum + num1 +num2;
// }else if(num1 + num2>12 && num1 + num2<=24){
// sum = sum +num1 + num2 -12;
// }
// else if(num1 + num2>24){
//     let rem = (num1 + num2)%12;
//     sum = sum + rem;
//     }
// console.log(sum);

let given = readLine().split(" ");
let num1 = parseInt(given[0]);
let num2 = parseInt(given[1]);
let sum =num1+num2;
if(sum<=12){
    sum= sum; 
}else {q = sum%12;
  if(q===0){
sum=12;
}else{
  sum =q;
}
}
console.log(sum);