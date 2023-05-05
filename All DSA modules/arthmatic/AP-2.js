let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let w = parseInt(readLine());
let x = parseInt(readLine());
let y = parseInt(readLine());
let d = y - x;
let z = w + (3*d);
console.log(z);