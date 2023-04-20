let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
let int = parseInt(readLine());
let arr = readLine().split(" ");//10 20 20 20 10 10 30 50 10 20 20
let sorted = arr.sort((a, b) => a - b);
let pairs = 0;
for (let i = 0; i < sorted.length; i++) {//1
    if (sorted[i] == sorted[i + 1]) {
        pairs++
        i =i+1; //2
    }
}
console.log(pairs);