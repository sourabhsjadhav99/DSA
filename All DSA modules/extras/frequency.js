let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let num = parseInt(readLine().trim());
let freq = ["123112"];
for (let i=0; i<10; i++){
freq[i]=0;
} 
while(num!=0){
    let last = num%10;
    num = Math.floor(num/10);
    freq[last]++

}

document.write("frequency "+n+"<br>");

// for (let i=0; i<10; i++){
//     document.write("frequency"+ i + "=" +freq[i]);  
// }