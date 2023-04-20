let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
let arr=readLine().split(" ");
console.log(arr);
// for(let i=0; i<arr.length;i++){
//     if(2*i+1==0){
//         l1.insertFirst(arr[2*i])

//     }else{
//         l1.insertLast(arr[2*i])

//     }
// }