let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
// let length = parseInt(readLine());
// for(let i=1; i<= length; i++) {
//  let integers = readLine().split(" ");
//   let x = integers[0];
// let y = integers[1];

// if (x > 0 && y > 0) {
// console.log("Q1");
// }else if (x < 0 && y > 0){
// console.log("Q2");
// }else if (x < 0 && y < 0){
// console.log("Q3");
// }else if (x > 0 && y < 0){
// console.log("Q4");}
// }

//----


let length = parseInt(readLine());
let i=1;
while(i<= length)  {
  let integers = readLine().split(" ");
  let x = integers[0];
let y = integers[1];
// let x = readLine();
//  let y = readLine();
if (x > 0 && y > 0) {
console.log("Q1");
}else if (x < 0 && y > 0){
console.log("Q2");
}else if (x < 0 && y < 0){
console.log("Q3");
}else if (x > 0 && y < 0){
console.log("Q4");
}
i++;
}