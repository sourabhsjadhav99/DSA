let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
function seriesSum(initial, current, num) {
  let i; mul = 1;
  if (current == num + 1) {
    return 0;
  }else{
  for ( i = initial; i < initial + current; i++) {
    mul = mul*i;      
  }
  return mul + seriesSum(i, current + 1, num);

}
}
let testcases=parseInt(readLine());
for(let i=0;i<testcases; i++){
    let num = parseInt(readLine());
   console.log(seriesSum(1, 1, num));
}