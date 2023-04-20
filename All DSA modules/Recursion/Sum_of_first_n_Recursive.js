let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
function sumOfFirstN(n) {
  let sum = 0;
  if (n == 1) {
    sum = 1;
  } else {
    sum = n + sumOfFirstN(n - 1);
  }
  console.log(n, sum);
  return sum;
}
let n = parseInt(readLine());
sumOfFirstN(n);
