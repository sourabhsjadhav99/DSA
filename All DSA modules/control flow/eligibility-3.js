let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let age = parseInt(readLine());
let gender = readLine();
if (age > 60) {
    console.log("Eligible");
} else if (age>58 && gender === "F") {
    console.log("Eligible");
}else{
    console.log("not eligible");
}
