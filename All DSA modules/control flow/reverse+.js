let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
let num = parseInt(readLine());
let temp = num;
let rev = 0;
while (temp != 0) {
  let rem = temp % 10;
  rev = rev * 10 + rem;
  if (temp > 0) {
    temp = Math.floor(temp / 10);
  } else {
    temp = Math.ceil(temp / 10);
  }
}
console.log(rev);
