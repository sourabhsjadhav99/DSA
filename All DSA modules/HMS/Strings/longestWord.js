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
let givenString=readLine().split(" ");
let sortedString=givenString.sort(function(arr1,arr2){return arr2.length-arr1.length;})
console.log(sortedString[0].length);
