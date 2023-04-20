let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// let ans=[];
// let arr= readLine().split(" ");
// for(i=0;i<arr.length; i++){
//   if(arr[i]!=ans[ans.length-1]){
// ans.push(arr[i]);
//   }
// }
// console.log(ans);






let arr= readLine().split(" ");
let o=0;
let b=1; 
while( b<arr.length ){
  if(arr[o] != arr[b]) {
arr[o+1]=arr[b]
o=o+1; 
b=b+1;
  }
  else if(arr[o]===arr[b]) {
b=b+1;
}

// console.log(arr);


for(i=0; i<arr.length-o;i++){
arr.pop();
}
console.log(arr);
}