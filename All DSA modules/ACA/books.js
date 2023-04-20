let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let result = "exist"
let no = parseInt(readLine());
let bk =[];
for (let i=0; i< no; i++ ) {
bk.push( readLine().trim());
}   

let length = parseInt(readLine());
let qr=[];
for (let i=0; i< length; i++ ) {
    qr.push(readLine().trim());
}  

for (let q=0; q<length; q++ ) {
    for (let b=0; b< no; b++ ) {
if (qr[q]===bk[b]){
    result = "exist";
    break;
}
// else{
// result= "notexist"
// }
    }
    console.log(qr[q] +" is "+result)
}