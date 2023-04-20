let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
function eligiblity(age,gender){

if (age > 60 && gender === "M") {
    console.log("Eligible");
} else if (age>58 && gender === "F") {
    console.log("Eligible");
}
else if (age>45 && gender === "T") {
    console.log("Eligible");
}else{
    console.log("not eligible");
}
}
let t = parseInt(readLine());
for(let i=0;i<t;i++){
let age = parseInt(readLine());
let gender = readLine();
eligiblity(age,gender)
}


