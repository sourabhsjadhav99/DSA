let fs = require("fs");
const { createSecureServer } = require("http2");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

let input=parseInt(readLine());

if(input===1){
    console.log("true");
}else{
    while(input>0){
        if(input%2==0){
            input=input/2;
        }
        else{
            break;
        }
    }
}
    if(input===1){
        console.log("true");
 }else{
console.log("false");
}
