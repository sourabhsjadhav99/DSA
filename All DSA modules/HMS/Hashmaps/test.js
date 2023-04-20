let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
let t= parseInt(readLine());
for(let i=0; i<2*t; i++){
    let input1=readLine();
    let input2=readLine().split("");
    let result=""


    for(i=0;i<input2.length;i++){
        if(input1.includes(input2[i])){
            result="YES";
    
        }else{
            result="NO";
        
        }
        
    }
    console.log(result)

}


