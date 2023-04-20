let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let no=parseInt(readLine());
for(let i=1; i<=10; i++ ){
    console.log(no + "*"+ i + "="+ no*i)
}