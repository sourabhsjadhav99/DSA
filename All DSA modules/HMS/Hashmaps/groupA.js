let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
//let testcases =parseInt(readLine());

let strlength = parseInt(readLine());
let strs = readLine().split(" ");
let map = {};
let result = [];
for (let i = 0; i < strs.length; i++) {
    let str = strs[i]
    let sorted = str.split("").sort().join("");
    if (!map[sorted]) {
        map[sorted] = [str]
    } else {
        map[sorted].push(str);
    }
}
for (let prop in map) {
    result.push(map[prop].sort())
}
result.reverse();
console.log(result);