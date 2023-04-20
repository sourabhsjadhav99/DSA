let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// //  -------- Do NOT edit anything above this line ----------
let testCases=parseInt(readLine());
for(let i=0;i<testCases;i++){
  function quickSort(arr) {
    if (arr.length < 2){
      return arr
    } 
    let pivot = arr[arr.length - 1]
    let left = []
    let right = []
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
  }
  let length=parseInt(readLine());
  let array = readLine().split(" ");
  let arr=[];
  for(let i=0;i<array.length;i++){
    arr.push(parseInt(array[i]))
  }
   console.log(...quickSort(arr))
  

}

