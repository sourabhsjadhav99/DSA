let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
// let given = parseInt(readLine());
// let x = given % 10;
// let y =(given - (given % 10)) / 10 ;
// let add = x + y;
// console.log(add);
let y = parseInt(readLine());
let x=10/y;
let z= x%y;
console.log(z);
