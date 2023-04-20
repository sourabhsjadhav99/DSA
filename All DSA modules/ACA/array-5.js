let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let length = parseInt(readLine());
let books = [];
for (let i=0; i<length; i++) {
books.push(readLine());
}
// console.log(books);
for (j=0; j< length; j++){
  console.log(books[j]);
}
//------------------------------------------
// let length = parseInt(readLine());
// let books = readLine().split(" ");
// console.log(books);
// for (j=0; j< length; j++){
//   console.log(books[j]);
// }