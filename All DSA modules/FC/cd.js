let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Define your class here
// your class name should be 'BankAccount' and method names as 'credit' and 'debit'
class BankAccount{
  constructor(balance){
    this.balance=balance;
  }
 credit(){
  let amt=0;
  amt =this.balance + transactionAmount;

 }
 debit(){
  let amt=0;
  amt =this.balance- transactionAmount;

 }

}

// DO NOT CHANGE ANYTHING BELOW THIS LINE

let n = parseInt(readLine());
let myAccount = new BankAccount();
for (let index = 0; index < n ; index++) {
  let currentTransaction = readLine().split(" ");
  let typeOfTransaction = currentTransaction[0];
  let transactionAmount = parseInt(currentTransaction[1]);
  if (typeOfTransaction === "d") {
    myAccount.debit(transactionAmount);
  } else {
    myAccount.credit(transactionAmount);
  }
}

console.log(myAccount.balance());

//------------------------------------------------
// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }

// let n = parseInt(readLine());
// let amt=0;
// for (let index = 0; index < n ; index++) {
//   let currentTransaction = readLine().split(" ");
//   let typeOfTransaction = currentTransaction[0];
//   let transactionAmount = parseInt(currentTransaction[1]);
//   if (typeOfTransaction === "c") {
// amt =amt + transactionAmount;
// }if(typeOfTransaction === "d") {
//   amt =amt - transactionAmount
// }
// }
// console.log(amt);


