let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let q = parseInt(readLine());
let n = parseInt(readLine());

 let result = "not present";
// for (let i = 0; i < n; i = i + 1) {
//     let currInt = parseInt(readLine());
//     if (currInt === q) {
//         result = "Present";
//         break;
//     }
// }
//-----
// let currInt = parseInt(readLine());
// while (currInt === q) { 
  
//           result = "Present";
//           break;  
//           currInt = parseInt(readLine());
// }
// console.log(result);
//----
let i = 0;
while (i<n) { let currInt = parseInt(readLine());
  if (currInt === q) {
            result = "Present";
            break;
  }
          i++;
}
console.log(result);