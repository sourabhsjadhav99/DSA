let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
// let Length = parseInt(readLine());

// let EvenCount = 0;
// let OddCount = 0;
//  for (let i = 1; i <= Length; i++) {
//     let currNum = parseInt(readLine());
   
//     if (currNum %2 === 0) {
//         EvenCount = EvenCount + 1;
//     } else {
//        OddCount = OddCount + 1;

//     }
// }
// console.log(EvenCount);
// console.log(OddCount);
//------
// let length = parseInt(readLine());
// let givennum = readLine().split(" ");
// let evenCount=0;
// let oddCount = 0;
// for (let i = 0; i < length; i++ ) {
  
//     let currNum = parseInt(givennum[i]);
//     if (currNum%2 === 0) {
//       evenCount= evenCount + 1;
//     } else {
//       oddCount =  oddCount +1
//     }
// }
// console.log(evenCount);
// console.log(oddCount);
//----

let length = parseInt(readLine());
let givennum = readLine().split(" ");
let evenCount = 0;
 let oddCount = 0;
let i=0;
while (i < length){ 
  let currNum = parseInt(givennum[i]);
  if (currNum%2 === 0) {
        evenCount= evenCount + 1;
      } else {
        oddCount =  oddCount +1
      }
i++;
}
console.log(evenCount);
console.log(oddCount);