let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let row = parseInt(readLine());
let arr1 =[];
for ( let i=0; i< row;i++){
arr1.push(readLine().split(" "));
}
console.log(arr1);

let arr2 =[];
for ( let i=0; i< row;i++){
arr2.push(readLine().split(" "));
}
console.log(arr2);

// let ans=[];
for ( let i=0; i< arr1.length;i++){
    let ans1=[];
    for ( let j=0; j< arr1[i].length;j++){
ans1.push(parseInt(arr1[i][j])+parseInt(arr2[i][j]))
    }console.log(...ans1);
    // ans.push(ans1)
// } console.log(ans);
// for ( let i=0; i< ans.length;i++){
// console.log(ans[i]);
}