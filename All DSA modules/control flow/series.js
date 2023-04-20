let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let num = parseInt(readLine());
let a=1;
let b = a;
for ( i=2;i<=num;i++){
    b= b+i;
}
console.log(b);

