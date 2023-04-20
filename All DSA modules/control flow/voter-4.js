let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let count = 0;
let numApplications = parseInt(readLine());
for (let i = 0; i < numApplications; i = i + 1) {
    let age = parseInt(readLine());
    if (age <= 18) {
        continue;
    }
    // if (age > 18) {
    //     count = count + 1;
       
    // }
    count = count + 1;
}
console.log(count);
// //------------
// let count = 0;
// let numApplications = parseInt(readLine());
// let i = 0;
// while ( i < numApplications ) {
// let age = parseInt(readLine());
// if (age > 18) {
// count = count + 1;
         
// }
// else{
// count = count + 0;}
// i++;
// }  
//   console.log(count);