let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = parseInt(readLine());
let arr = [];
let count = 1;
let flag = false;

for (let i = 0; i < n; i++) {
  arr.push(parseInt(readLine()));
}

for (let i = 1; i < n; i++) {
  if (arr[i - 1] === arr[i]) {
    count = count + 1;
  } else {
    if (count === arr[i - 1]) {
      console.log(count);
      flag = true;
      break;
    } else {
      count = 1;
    }
  }
}
if (arr[arr.length - 1] === count) {
  console.log(count);
} else if (flag === false) {
  console.log(-1);
}
