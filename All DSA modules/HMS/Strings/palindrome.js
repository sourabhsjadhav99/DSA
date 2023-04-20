// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// const { reverse } = require("dns");

// function readLine() {
//     idx++;
//     return data[idx - 1].trim();
// }

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
// let givenString=readLine().toString().toLowerCase();
// let revString= givenString.split("").reverse().join("");
// if(givenString===revString){
//     console.log("YES");
// }else{
//     console.log("NO");
// }
//---------------------------------------------------------------------------
// let givenString = readLine().toString().toLowerCase();
// let length = givenString.length - 1;
// let newString = "";
// for (i = length; i >= 0; i--) {
//     newString = newString + givenString[i];
// }
// if (newString != givenString) {
//     console.log("NO");
// } else {
//     console.log("YES");
// }

//---------------------------------------------------------------------------
// let givenString = readLine().toString().toLowerCase();
// let length = givenString.length;
// for (i = 0; i < parseInt(length/2); i++) {
//     if (givenString[i] != givenString[length-1-i]) {
//         console.log("NO");
//     }else{
//         console.log("YES");
//     }
// }
//---------------------------------------------------------------------------
//palindrome of number
let gnum=0;
let temp=gnum;
let rev=0;
let result=false;
if(gnum<=0){
    result=false

}else{
while(temp!=0){
    let rem=temp%10;
    rev= rev*10+rem;
    temp=parseInt(temp/10);
}
if(rev==gnum){
    result=true;
}
}
console.log(result)