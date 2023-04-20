let fs = require("fs");
const { isNativeError } = require("util/types");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let length = parseInt(readLine());
let arr = [];
// let ans=[];

for (let i=0; i<length; i++ ){
   arr.push(readLine().trim().split(" ").map(Number));                                          
}

for (let i=0; i<arr[0].length; i++ ){
   let temp=[];
   for (let j=0; j<length; j++ ){
     temp.push(arr[j][i]);
   
    } 
     console.log(...temp);
    // ans.push(temp);
}
// for (i=0; i<ans.length; i++){
//    console.log(...ans[i]);
//  }
