let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
let int = parseInt(readLine())
let input = readLine().split(" ");//abaab
let freqMap = new Map();
for (let i = 0; i < input.length; i++) {
    let num = input[i];
    if (freqMap.has(num)) {
        let existingCount = freqMap.get(num);
        let newCount = existingCount + 1;
        freqMap.set(num, newCount);
    }
    else {
        freqMap.set(num, 1);
    }
}
for (let [key, val] of freqMap) {
    if(val%2 !=0){
        console.log(key)
    }
}
