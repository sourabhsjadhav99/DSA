let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
// Input Format:
// First line denotes n, the number of inputs. The next n lines contains one integer in each line.

// Output Format:
// One integer denoting the result, as mentioned above.


let length = parseInt(readLine());
let life = 0;
for (let i=0; i<=length; i++){
    let num = parseInt(readLine());
    if ( num >0) {
        life = life + num;
    }else if (num<0){
        life = life + 0;
    }
    
}
console.log(life);
    //---------------=------------
// let length = parseInt(readLine());
// let life = 0;
// let i=0;
// while(i<length) {
//     let num = parseInt(readLine());
//  if ( num >0) {
//         life = life + num;
//     }else if (num<0){
//         life = life + 0;
//     }
// i++;
//     }

// console.log(life);