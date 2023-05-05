let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let y = readLine();
let z = y.split(" ");
let a = parseInt(z[0]);
let b = parseInt(z[1]);
let c = parseInt(z[2]);
let x = a*b*c;
console.log(x);
// let inputLine = readLine(); // "20 1 30"
// let values = inputLine.split(" "); // "20 1 30".split(" ") --> ["20", "1", "30"]
// let unitPrice = parseInt(values[0]);
// let dailyQuota = parseInt(values[1]);
// let daysInMonth = parseInt(values[2]);
// let monthlyBill = unitPrice * dailyQuota * daysInMonth;
// console.log(monthlyBill);