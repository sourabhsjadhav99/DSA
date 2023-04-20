let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let n = readLine().split(" ");
let k = readLine().split(" ");
let count= 0;
for (let i=0; i<n.length;i++){
	for (let j=0; j<k.length;j++){
if(n[i]===k[j]){
	count = count+1;
}

}
}console.log(count);