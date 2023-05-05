let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}



let sum = 0;
let number = parseInt(readLine());
let temp = number;
while (temp > 0) {
let remainder = temp % 10;
sum += remainder * remainder * remainder;
temp = parseInt(temp / 10); 
}
if (sum == number) {
    console.log("Yes");
}
else {
    console.log("No");
}


