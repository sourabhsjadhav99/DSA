
// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }

// function Greeting(person1=0) {
//     //person1 ="ravi"
// console.log("hello " + person1);
//     }
//     let person = "rajesh";
//    Greeting(person);
  
  
  
//  //  console.log(person);
//---------------------------------------------
// function sum(n1=0,n2=0){
//     sum = n1+n2;
//     console.log(sum);
// }
// sum(10)
//-----------------------

function test1(a){

 x=[100,200,20,10,10];
  for (let i =0; i<5; i++){
    a[i]= a[i]*3;
  }
  return;
}
let x = [10,20,30,40,50];
let y=x;

console.log(x);
test1(x)
console.log(x);
console.log(y);
