let fs = require("fs");
const { off } = require("process");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


// let input = readLine().split("")
//     let count =0
//     for(let i=0;i <input.length; i++){
//         if(input[i]=="+"){
//             count=count+1
//         }else{
//             count=count-1
//         }
//     }
// console.log(count)


// let N=parseInt(readLine())
// let add=0
// let str = ""
// let arr =[]
// for (let i=1; i<= N; i++){
//     str = 9+str
//     arr.push(str)
// }
// for (let i=0; i< arr.length; i++){
//     add= add + parseInt(arr[i])
// }
// console.log(add)

// let firstline = readLine().split(" ").map(Number)
// let secondline = readLine().split(" ").map(Number)

// for(let i=0; i<firstline[1]; i++){
//     let thirdline= readLine().split(" ").map(Number)
//     let sum =0;
//     for(let i=thirdline[0]; i<=thirdline[1]; i++){
//         sum=sum+secondline[i]
//     }
//     console.log(sum)
// }




// let firstline = readLine().split(" ").map(Number)
// let rows = firstline[0]
// let bombs = firstline[1]
// let arr = []
// for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < rows; j++) {
//         arr.push(`${i + 1}${j + 1}`)
//     }
// }
// for (let i = 1; i <= bombs; i++) {
//     let toRemove = readLine().split(" ").map(Number)
//     let index=''
//     for (let i = 0; i < toRemove.length; i++) {
//         index = index+arr[i]
//    }

// }
// // console.log(arr)








// let val=readLine().split(" ")
// let n=parseInt(val[0])
// let Q=parseInt(val[1])
// let arr=readLine().split(" ")
// let sum=[]
// sum[0]=parseInt(arr[0])
// for(let i=1;i<n;i++){
//     sum[i]=sum[i-1]+parseInt(arr[i])
// }
// for(let i=0;i<Q;i++){
//     let LandR=readLine().split(" ")
//     let L=parseInt(LandR[0])
//     let R=parseInt(LandR[1])
//     if(L===0){
//         console.log(sum[R])
//     }else{
//         console.log(sum[R]-sum[L-1])
//     }

// }

// let testCases = parseInt(readLine())
// for (let i = 0; i < testCases; i++) {
//     let input = readLine().split(" ")
//     let s = input[0].toLocaleLowerCase().split("").sort()
//     let t = input[1].toLocaleLowerCase().split("").sort()
//     let num = parseInt(input[2])

//     let hashmap1 = new Map()
//     for (let i = 0; i < s.length; i++) {
//         if (!hashmap1.has(s[i])) {
//             hashmap1.set(s[i], 1)
//         } else {
//             hashmap1.set(s[i], hashmap1.get(s[i]) + 1)
//         }
//     }
//     let hashmap2 = new Map()
//     for (let i = 0; i < t.length; i++) {
//         if (!hashmap2.has(t[i])) {
//             hashmap2.set(t[i], 1)
//         } else {
//             hashmap2.set(t[i], hashmap2.get(t[i]) + 1)
//         }
//     }
//     let arr = []
//     for (let [key1, values1] of hashmap1) {
//         for (let [key2, values2] of hashmap2) {
//             if (key1 == key2 && values1 == num && values2==num) {
//                 arr.push(key2)
//             }
//         }
//     }
//     console.log(arr.join(" "));
// }



// let testCases = parseInt(readLine())
// for (let i = 0; i < testCases; i++) {
//     let arr = readLine().split(" ")
//     let firstWord = arr[0].split("").sort()
//     let secondWord = arr[1].split("").sort()
//     let result

//     let hashmap1 = new Map()
//     for (let i = 0; i < secondWord.length; i++) {
//         if (!hashmap1.has(secondWord[i])) {
//             hashmap1.set(secondWord[i], 1)
//         } else {
//             hashmap1.set(secondWord[i], hashmap1.get(secondWord[i]) + 1)
//         }
//     }
//     let hashmap2 = new Map()
//     for (let i = 0; i < firstWord.length; i++) {
//         if (!hashmap2.has(firstWord[i])) {
//             hashmap2.set(firstWord[i], 1)
//         } else {
//             hashmap2.set(firstWord[i], hashmap2.get(firstWord[i]) + 1)
//         }
//     }
//     for (let [keys1, values1] of hashmap1) {
//         for (let [keys2, values2] of hashmap2) {
//             if (keys1 == keys2 && values1 == values2) {
//                 result="False";
//             }else if(values1 == values2-1 || values2==values1-1){
//                 result= "True";



//             }
//         }
//     }
// console.log(result);
// }














// for(let i=0; i<firstWord.length; i++){
//     for(let j=0; j<secondWord.length; j++){
//         if(firstWord[i]==secondWord[j]){
//             arr.push(firstWord[i])
//         }
//     }
// }
// console.log(arr.join(" "))






// function isEditDistanceOne(s1, s2) {
//     let m = s1.length, n = s2.length;
//     if (Math.abs(m - n) > 1)
//         return false;
//     let count = 0;
//     let i = 0, j = 0;
//     while (i < m && j < n) {
//         if (s1[i] != s2[j]) {
//             if (count == 1)
//                 return false;
//             if (m > n)
//                 i++;
//             else if (m < n)
//                 j++;
//             else {
//                 i++;
//                 j++;
//             }
//             count++;
//         }
//         else {
//             i++;
//             j++;
//         }
//     }
//     if (i < m || j < n)
//         count++;
//     return count == 1;
// }

// let testCases = parseInt(readLine())
// for (let i = 0; i < testCases; i++) {
//     let arr = readLine().split(" ")
//     let s1 = arr[0];
//     let s2 = arr[1];
//     if (isEditDistanceOne(s1, s2))
//         console.log("True");
//     else
//         console.log("False");

// }

// let length = parseInt(readLine())
// let arr = readLine().split(" ").map(Number).sort((a, b) => a - b)
// let arr2 = []
// for (let i = 0; i <= arr.length - 1; i++) {
//     for (let j = i+1; j <= arr.length - 1; j++) {
//         if (arr[j] >= arr[i]) {
//             arr2.push(`${arr[i]}${arr[j]}`)
//         }
//     }
// }
// let x= new Set([...arr2])
// let arr4=[]
// for (let val of x ){
//     let arr3= val.split("")
//     let pairs=`(${arr3[0]},${arr3[1]})`
//     arr4.push(pairs)
// }
// console.log(arr4.length);

let n = parseInt(readLine())
let arr =  readLine().split(" ").map(Number)

function mergesort(arr) {
    if (arr.length < 2) {
      return arr
    }
    const mid = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, mid)
    const rightArr = arr.slice(mid)
    return merge(mergesort(leftArr), mergesort(rightArr))
  }
  
  function merge(leftArr, rightArr) {
    const sortedArr = []
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        sortedArr.push(leftArr.shift())
      } else {
        sortedArr.push(rightArr.shift())
      }
    }
    const resultArr = [...sortedArr, ...leftArr, ...rightArr]
    return resultArr
  }
let count = 0
for(let i=0;i<n;i++){     
    for(let j=i+1;j<n;j++){
    if(arr[i]<=arr[j]){
        count++
    }
}

}console.log(count)