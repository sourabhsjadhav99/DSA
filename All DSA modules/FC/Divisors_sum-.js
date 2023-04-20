
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

function sumOfDivisors(n){
    let sum =0;
    for(let i=1; i<=n; i++){
        if(n%i===0){
            sum = sum+i;
        }
    }
    return sum;
    }
    let n = parseInt(readLine());
    console.log(sumOfDivisors(n));