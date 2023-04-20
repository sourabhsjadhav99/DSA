
// Factorial-->O(n)
// function factorial(n) {
//   let result = 1;
//   for (let i = 2; i <= n; i++) {
//     result = result * i;
//   }
//   return result;//for 0 and 1 not go in loop
// }
function factorial(n) {
  if(n<2){
    return n
  }
return n*factorial(n-1)
}


console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120