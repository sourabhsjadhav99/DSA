let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
//----------------------------------------
function factorial(number){
    // write your code here
let prd = 1;
if(number>0){
for (let i=1; i<=number; i++ ){
    prd=prd*i;
}
return prd;
}else if(number===0){
    return 1;
}else{
    return "undefined"
}
    
}
    
    let number = parseInt(readLine());
    
    console.log(factorial(number));