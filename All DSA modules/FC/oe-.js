let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
function oddeven(num)
 {
    result=""
    if (num%2===0){
        result ="even";
    }else if (num%2!=0){
        result= "odd";
    }
return result;
}
let arr =readLine().split(",");
for (let i=0; i<arr.length;i++){
let num=arr[i];
console.log(oddeven(num));
}