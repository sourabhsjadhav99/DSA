let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
// let pixel=[];
// let pixelNo = parseInt(readLine());
// for(i=0; i<pixelNo; i++){
//     pixel.push(readLine());
// }
// let icon=[]
// let  iconNo = parseInt(readLine());
// for(i=0; i<iconNo; i++){
//     icon.push(readLine());
// }

let pixel = readLine().split(" ");
let icon = readLine().split(" ");
let count = 0;
for(i=0; i<icon.length; i++){
    for(j=0; j<pixel.length; j++){
if(icon[i]===pixel[j]){
    count = count+1;
}
    }
}

console.log(count);
//--------------------------------------------------
