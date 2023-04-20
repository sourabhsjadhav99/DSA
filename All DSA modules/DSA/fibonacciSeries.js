// Fibonacci --> O(log(n))
function fibonacci(n) {
  if(n<2){
    return [0]
  }
  const fib = [0, 1];
  for (let i = 2; i <n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// console.log(fibonacci(1)); // [0,1]
// console.log(fibonacci(10)); // [0,1,1]
// console.log(fibonacci(7)); // [0,1,1,2,3,5,8]



// // recursive Fibonacci
function recursiveFibonacci(n) {
  if (n < 2) {
    return [n];
  }
  return [recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2)];
}
console.log(recursiveFibonacci(5))
