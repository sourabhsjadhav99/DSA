let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let arr =readLine().split(" ");
let rotate = parseInt(readLine());
for (i=0; i<rotate; i++ ){
let x= arr.pop();
arr.unshift(x);
}
for(j=0; j<arr.length; j++){
    console.log(arr[j]);
}
