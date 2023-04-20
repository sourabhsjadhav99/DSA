let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let arr = readLine().split(" ");
let count =0;
for (i=0; i<arr.length; i++) {
    for (j=i+1; j<arr.length; j++){
        if (arr[i]===arr[j]){
            count=count+1;
        }
    }
}

console.log(count);
