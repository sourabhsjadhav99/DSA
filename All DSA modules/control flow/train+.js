let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
// let arr = ["L","M","U","L","M","U","SL","SU"];
// let length = parseInt(readLine());
// let result;
// for (i=0; i< length; i++){
// let given = readLine().split(" ");
// let birth= parseInt(given[0]);
// let query=parseInt(given[1]);
// if (query>birth){
//   console.log("invalid")
// }else{
// if (query%8===0){ 
//     result=8;
// }else{

// result = query%8;
// }
// console.log(arr[result-1]);
// }
// }
let t=parseInt(readLine()); 
let berths=[" ","L","M","U","L","M","U","SL","SU"]; 
let berthsLength=8;
while(t--){
let arr=readLine().split(" "); 
let totalBerth=parseInt(arr[0]); 
let berthNumber=parseInt(arr[1]); 
if(berthNumber>totalBerth){ 
  console.log('Invalid')
}else{ let mod=parseInt(berthNumber%8) 
  if(mod===0){ 
    console.log(berths[berthsLength])

}else{ console.log(berths[mod])

}

}

}