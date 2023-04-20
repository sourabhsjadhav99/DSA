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
let testcases = parseInt(readLine());
for (let j = 0; j < testcases; j++) {
    let steps = parseInt(readLine());
    let arr = readLine().split("");//UDDDUDUU
    let sealevel = 0;
    let valley = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "U") {
            sealevel++;
            if (sealevel == 0) {
                valley++;
            }
        } else if (arr[i] == "D") {
            sealevel--;
        }
    }
    console.log(valley);
}