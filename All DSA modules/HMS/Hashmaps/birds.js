let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1]
}

// -------- Do NOT edit anything above this line ----------
let Cases = parseInt(readLine());
let input = readLine().split(" ");//1 2 3 4 5 4 3 2 1 3 4
let freqMap = new Map();
for (let i = 0; i < input.length; i++) {
    let char = input[i];
    if (freqMap.has(char)) {
        let existingCount = freqMap.get(char);
        let newCount = existingCount + 1;
        freqMap.set(char, newCount);
    } else {
        freqMap.set(char, 1);
    }
}


let max=[...freqMap.entries()].reduce((a, e ) => e[1] > a[1] ? e : a);
console.log(max[0]);

// let obj = Object.fromEntries(freqMap);
// let x=Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
// console.log(x);