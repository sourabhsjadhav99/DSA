let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let x = parseInt(readLine());
let y = parseInt(readLine());
if (x % y === 0) 
{ 
    console.log("divisible");
}
else
{
    console.log("not divisible");
}