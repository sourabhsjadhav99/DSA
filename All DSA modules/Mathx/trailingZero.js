// let fs = require("fs");
// let data = fs.readFileSync(0, "utf-8");
// let idx = 0;
// data = data.split("\n");

// function readLine() {
//   idx++;
//   return data[idx - 1].trim();
// }

let num = parseInt(readLine());
let trailingZeros = 0;
for (let i = 5; i <= num; i = i * 5) {
  trailingZeros = trailingZeros + parseInt(num / i);
}
console.log(trailingZeros);


let n=12345
if(n==0){
    console.log(1)
}else{
    let counter=0
    while(n!=0){
        n=parseInt(n/10)
        counter++
    }
    console.log(counter)
}

console.log(30>>3)