//Power Of Two--> O(logn)-- each time number is reduced to half

function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwo(1)); // true--> 2**0=1
console.log(isPowerOfTwo(2)); // true--> 2**1=2
console.log(isPowerOfTwo(5)); // false--> 2**(no value)=5
