// let fs = require("fs");
// let data = fs.readFileSync(0, "utf-8");
// let idx = 0;
// data = data.split("\n");

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }
let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
  arr.push(parseInt(readLine()));
}
let folds = parseInt(readLine());
let array = arr;
for (i = 0; i < folds; i++) {
  let temp = [];
  let s = 0;
  let e = array.length - 1;
  while (s < e) {
    temp.push(array[s] + array[e]);
    s++;
    e--;
  }
  if (s === e) {
    temp.push(array[s]);
  }
  array = temp;
}
console.log(array.length);
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
