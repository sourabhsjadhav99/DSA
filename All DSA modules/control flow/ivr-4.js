let fs = require("fs");
const { createSecureServer } = require("http2");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}
// let count1 = 0;
// let count2 = 0;
// let count3 = 0;
// let choice = parseInt(readLine());
// while (choice != 0) {
//     if (choice === 1) {
//         count1 = count1 + 1;
//     } else if (choice === 2) {
//         count2 = count2 + 1;
//     } else if (choice === 3) {
//         count3 = count3 + 1;
//     }
//     choice = parseInt(readLine());
// }
// console.log(count1);
// console.log(count2);
// console.log(count3);
//-------------
let count1 = 0;
let count2 = 0;
let count3 = 0;
let length = parseInt(readLine());
let x =readLine().split(" ");
let i=0;
while (i < length) {
   let choice = parseInt(x[i]);
    if (choice === 1) {
        count1 = count1 + 1;
    } else if (choice === 2) {
        count2 = count2 + 1;
    } else if (choice === 3) {
        count3 = count3 + 1;
    }else{
      break;
    }
    i++;}
console.log(count1);
console.log(count2);
console.log(count3);
//-------------------------

// for (let choice = parseInt(readLine()); choice != 0;    choice = parseInt(readLine()) )
//  {
//     if (choice === 1) {
//                 count1 = count1 + 1;
//     } else if (choice === 2) {
//                 count2 = count2 + 1;
//     } else if (choice === 3) {
//                 count3 = count3 + 1;
//              }

// }
//------------------
// let count1 = 0;
// let count2 = 0;
// let count3 = 0;
// let length = parseInt(readLine());
// for (i=0; i<= length;  i++) 
//  {let choice = parseInt(readLine())
//     if (choice === 1) {
//                 count1 = count1 + 1;
//     } else if (choice === 2) {
//                 count2 = count2 + 1;
//     } else if (choice === 3) {
//                 count3 = count3 + 1;
//              }else if (choice===4){
//                 continue;
//              }}
// console.log(count1);
// console.log(count2);
// console.log(count3);
//------------------------------------------
// let count1 = 0;
// let count2 = 0;
// let count3 = 0;
// let length = parseInt(readLine());
// let x= readLine().split(" ");
// for (i=0; i<= length;  i++) 
//  {let choice = parseInt(x[i])
//     if (choice === 1) {
//                 count1 = count1 + 1;
//     } else if (choice === 2) {
//                 count2 = count2 + 1;
//     } else if (choice === 3) {
//                 count3 = count3 + 1;
//              }else if (choice===0){
//                 break;
//              }}
// console.log(count1);
// console.log(count2);
// console.log(count3);