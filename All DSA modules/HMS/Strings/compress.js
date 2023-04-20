let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let testCases = parseInt(readLine());

for (let j = 0; j < testCases; j++) {
    let input = readLine();
    let count = 0;
    let result = "";

    for (let i = 0; i < input.length; i++) {
        count++;
        if (input[i] !== input[i + 1]) {
            if (count != 1) {
                result = result + input[i] + count;
            } else {
                result = result + input[i];
            }

            count = 0;
        }
    }
    console.log(result);
}



