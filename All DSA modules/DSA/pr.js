// // get input using the process.stdin stream
// const readline = require('readline');
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // initialize variables
// let n = 0;
// let arr = [];

// // read input and shuffle the array
// rl.on('line', (input) => {
//   if (n === 0) {
//     n = parseInt(input);
//   } else {
//     arr.push(parseInt(input));
//     if (arr.length === 2*n) {
//       let shuffledArr = [];
//       for (let i = 0; i < n; i++) {
//         shuffledArr.push(arr[i]);
//         shuffledArr.push(arr[n+i]);
//       }
//       // output the shuffled array
//       shuffledArr.forEach(element => {
//         console.log(element);
//       });
//       rl.close();
//     }
//   }
// });


let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
let length = parseInt(readLine());
let arr =[];
for (i=0; i <2*length;i++){
arr.push(readLine().trim())
}

for (i=0; i <length;i++){
let num1=arr[i];
console.log(num1);
let num2=arr[length+i];
console.log(num2);
}