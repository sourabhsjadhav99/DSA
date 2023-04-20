let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


function gcd(a, b) {
  if (a == 0 && b == 0) {
    return "NA";
  } else if (a == 0) {
    return b;
  } else if (b == 0) {
    return a;
  }else if(a>b){
    return gcd(b,a%b)
  }else{
    return gcd(a, b%a)
  }
}

let testCases=parseInt(readLine())
for (let i=0; i<testCases; i++){
    array = readLine().split(" ").map(Number)
    console.log(gcd(array[0], array[1]))

}