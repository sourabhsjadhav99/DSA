let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let length = parseInt(readLine());
let inputs = readLine().split(" ");
let sum = 0;
let mean=0;
for(i=0;i<length;i++){
    let numi = parseInt(inputs[i]);
sum = sum + numi;
mean = sum/length;

}
let meanR = Math.floor(mean);
console .log(meanR);