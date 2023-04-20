let fs = require("fs");
const { createSecureServer } = require("http2");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}
let no = parseInt(readLine());
for(i=0;i<no;i++){
let number = parseInt(readLine());
let isPrime = true;

// check if number is equal to 1
if (number === 1 || number === 0) {
    console.log("No");
}
// check if number is less than 1
else if (number<0) {
    console.log("No");
}
// check if number is greater than 1
else if (number > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(" Yes");
    } else {
        console.log(" No");
    }
}

}