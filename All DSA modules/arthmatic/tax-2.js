let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
// 1. Read unit price and gst percentage
// 2. tax amount = unit price * gst percentage / 100
// 3. final price = unit price + tax amount

// let unitPrice = parseInt(readLine());
// let gstPercent = parseInt(readLine());
// let taxAmount = unitPrice * gstPercent / 100;
// let finalPrice = unitPrice + taxAmount;
// console.log(finalPrice);
x = readLine().split(" ")
let unitPrice = parseInt(x[0]);
let gstPercent = parseInt(x[1]);
 
let taxAmount = unitPrice * gstPercent / 100;
let finalPrice = unitPrice + taxAmount;
console.log(finalPrice);