let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
//-------------------------------------
// let noOfWalls = parseInt(readLine())
// let noOfBricks = readLine().split(" ").map(Number)
// // let arr =[]
// let count =0
// for (let i=0; i< noOfBricks.length; i++){
//     if(noOfBricks[i]<=noOfBricks[i-1]){
//         // arr.push(noOfBricks[i-1]-noOfBricks[i]+1)
//         count=count+noOfBricks[i-1]-noOfBricks[i]+1
//     }
//     // else{
//     //     arr.push(noOfBricks[i])
//     // }


// }

// console.log(count)
//------------------------------------------



// function lengthOfArray(arr, N,  K){

//     let maxlengthOfArray = 0;
 
//     for (let i = 0; i < N; i++) {
//         let Sum = 0;
 
//         for (let j = i; j < N; j++) {
//             Sum += arr[j];
//             if (Sum == K) {
 
//                 maxlengthOfArray = Math.max(maxlengthOfArray, j - i + 1);
//             }
//         }
//     }
//     return maxlengthOfArray;
// }
// let input = readLine().split(" ").map(Number)
// let arr = readLine().split(" ").map(Number)

// let arrayLength= input[0]
// let requiredOutput= input[1]

// console.log( lengthOfArray(arr,arrayLength, requiredOutput));
//----------------------------------------------------------
// let noOfWalls = parseInt(readLine())
// let noOfBricks = readLine().split(" ").map(Number)
// let count =0
// for (let i=0; i< noOfWalls; i++){
//     if(noOfBricks[i+1]<=noOfBricks[i]){
//         noOfBricks[i+1]=noOfBricks[i]-noOfBricks[i+1]+1
//         count=count+noOfBricks[i]-noOfBricks[i+1]+1
//     }
// }
// console.log(noOfBricks, count)

function lenOfLongSubarr(arr, n, k){
 


    var um = new Map();

    var sum = 0, maxLen = 0;
 

    // traverse the given array

    for (var i = 0; i < n; i++) {
 

        // accumulate sum

        sum += arr[i];
 

        // when subarray starts from index '0'

        if (sum == k)

            maxLen = i + 1;
 

        // make an entry for 'sum' if it is

        // not present in 'um'

        if (!um.has(sum))

            um.set(sum, i);
 

        // check if 'sum-k' is present in 'um'

        // or not

        if (um.has(sum - k)) {
 

            // update maxLength

            if (maxLen < (i - um.get(sum - k)))

                maxLen = i - um.get(sum - k);

        }

    }
 

    // required maximum length

    return maxLen;
}
 
// Driver Code
let input = readLine().split(" ").map(Number)
let arr = readLine().split(" ").map(Number)

let arrayLength= input[0]
let requiredOutput= input[1]
console.log( lenOfLongSubarr(arr,arrayLength, requiredOutput));