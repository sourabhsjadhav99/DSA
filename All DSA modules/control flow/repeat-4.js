let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
// let length = parseInt(readLine());
// let givennum = parseInt(readLine());
// let maxCount = 1;

// for ( let i = 0;  i <= length;  i = i + 1) {
//     let Num = parseInt(readLine());
// if (Num === givennum ) 
// {
//   maxCount = maxCount +1;
// }
// }
// console.log(maxCount);
//-----------
let x= readLine().split(" ");
let length = parseInt(x[0]);
let givennum = parseInt(x[1]);
let maxCount = 1;

for ( let i = 2;  i <= length;  i = i + 1) {
    let Num = parseInt(x[i]);
if (Num === givennum ) 
{
  maxCount = maxCount +1;
}
}
console.log(maxCount);
//-------
// let i = 0;
// while (i <= length) {
//   let Num = parseInt(readLine());
// if (Num === givennum ) 
// {
// maxCount = maxCount +1;
// }
// i++;
// }

// console.log(maxCount);