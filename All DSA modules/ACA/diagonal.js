let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}



let list = parseInt(readLine());
let arr = [];
for (let i=0; i<list; i++ ){
   let row= readLine().trim().split(" ").map(Number); 
 arr.push(row);                                                  
} 



// for (let i=0; i<=arr.length; i++ ){
//     for (let j=0; j<arr.length; j++ ){
//        if (i===j){
//         if(arr[i][j]>=0){
//             arr[i][j]=1;
//         }else{
//             arr[i][j]=0;
//         }
//        }
//     }
  
// }   
////////

for (let i=0; i<arr.length; i++ ){
      if(arr[i][i]>=0){
          arr[i][i]=1;
      }else{
          arr[i][i]=0;
      }
     }
   



for (i=0; i< arr.length; i++) {
  console.log(...arr[i]);
}


// for (let i=0; i<arr.length; i++ ){
//     for (let j=0; j<arr.length; j++ ){
//         console.log(arr[i][j]);
//     }

// }
