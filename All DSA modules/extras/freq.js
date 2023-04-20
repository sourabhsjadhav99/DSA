let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// let word = readLine().split('');

// console.log(word);

// let letter = readLine();
// let count =0;
// for(let i=0; i<word.length; i++ ){
//     if (word[i]===letter){
//         count= count+1;
//     }
  
// }


// console.log(letter + "=" + count);

//-------------------------
let num = parseInt(readLine());
let comp = parseInt(readLine());
let count = 0;
while(num!=0){
    let last = num%10;
    if(last === comp){
        count =count+1;
    }
    num = Math.floor(num/10);
}
console.log(comp + "=" + count)