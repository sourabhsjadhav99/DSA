let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

let x =parseInt(readLine());
let product=1;
let sum=0;
let temp=x
if(temp!=0 ){
while(temp!=0){
let rem = temp % 10;
product = product*rem;
sum = sum + rem;
temp = parseInt(temp / 10);
}
let difference = product-sum;
console.log(difference);
}else {
    console.log(parseInt(0));
}