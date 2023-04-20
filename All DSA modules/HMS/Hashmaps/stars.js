let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let testCases= parseInt(readLine())
for(let i=0; i<testCases;i++){
    let stars=parseInt(readLine())
let input = readLine();
let freqMap = new Map();
for (let i = 0; i < input.length; i++) {
    let char = input.charAt(i);
    if(freqMap.has(char)) {
        let existingCount = freqMap.get(char);
        let newCount = existingCount + 1;
        freqMap.set(char, newCount);
    } else {
        freqMap.set(char, 1);
    }
}
let sum = 0;
for (let [key, val] of freqMap) {
    let freq = val;
    sum = sum + ( (freq) * (freq - 1) / 2);
}
console.log(sum);
}
