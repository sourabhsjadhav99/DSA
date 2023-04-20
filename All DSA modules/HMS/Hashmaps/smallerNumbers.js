let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let integers = parseInt(readLine());
let arr = [];
for (let i = 0; i < integers; i++) {
    let input = parseInt(readLine());
    arr.push(input)
}
for (let i = 0; i < arr.length; i++) {
    let array = [];
    for (let j = 0; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            array.push(arr[j]);

        }
    }
    console.log(array.length);
}