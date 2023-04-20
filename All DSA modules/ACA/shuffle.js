let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
// let length = parseInt(readLine());
// let arr =[];
// for (i=0; i <2*length;i++){
//         arr.push(readLine().trim());
     
//         }
   
   
// for (let j=0; j< arr[j].length;j++){

//     let temp = arr[j+1];
//     arr[j+1] = arr[j+3];
//     arr[j+3] = temp; 
 
//     let temp1 = arr[j+2];
//     arr[j+2] = arr[j+4];
//     arr[j+4] = temp1; 

//     let temp2 = arr[j+2];
//     arr[j+2] = arr[j+3];
//     arr[j+3] = temp2; 
//   } 

// for (i=0; i <2*length;i++){
// console.log(arr[i]);
// }







let length = parseInt(readLine());
let arr =[];
for (i=0; i <2*length;i++){
arr.push(readLine().trim())
}

for (i=0; i <length;i++){
console.log(arr[i]);
console.log(arr[length+i]);
}