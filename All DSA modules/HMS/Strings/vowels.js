let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
let size=parseInt(readLine());
let str=readLine();
let vowels=['a','e','i','o','u'];
let result=""
for(i=0;i<vowels.length;i++){
    if(str.includes(vowels[i])){
        result="YES";

    }else{
        result="NO";
        break;
    }
}
console.log(result);
