let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// let m = parseInt(readLine());
// let n = parseInt(readLine());
// for (i=m; i<=n; i++){
//     if (i >= 0){
//     console.log(i);
// }
// }
//   if (m<0 && n<0){
//     console.log(-1);
//   }
// ----------------
let x = readLine().split(" ");
let m = parseInt(x[0]);
let n = parseInt(x[1]);
for (i=m; i<=n; i++){
    if (i >= 0){
    console.log(i);
}
}
  if (m<0 && n<0){
    console.log(-1);
  }
//--------------------------
// let m = parseInt(readLine());
// let n = parseInt(readLine());
// i=m;
// while (i<=n) {
//     if (i >= 0){
//       console.log(i);
// }
// i++;
// }
//   if (m<0 && n<0){
//     console.log(-1);
//   }