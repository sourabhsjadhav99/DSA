let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
let noOfWords = parseInt(readLine());
let count = 0;
let names = readLine().split(" ");
for (let i = 0; i < names.length; i++) {
    if(names.length%2==0){
        count = 0
    }else{
        count=1
    }
    for (j = 0; j < names[i].length; j++) {
        if (names[i].includes(names[i][j])) {
            count = count + 1;
        }

    }
}
console.log(count)