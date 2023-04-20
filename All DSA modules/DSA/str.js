// let n=5
// let str=""
// for (let i=1; i<=n; i++){
//     for (let j=0; j<i; j++){
//         str=str+"*"
//     }
//     str=str+"\n"
// }
// console.log(str)

// let n=5
// let str=""
// for (let i=1; i<=n; i++){
//     for (let j=0; j<n-i; j++){
//         str=str+" "
//     }
//     for (let k=0; k<i; k++){
//         str=str+"*"
//     }
//     str=str+"\n"
// }
// console.log(str)

// let n=5
// let str=""
// for (let i=1; i<=n; i++){
//     for (let j=0; j<=n-i; j++){
//         str=str+"*"
//     }
//     str=str+"\n"
// }
// console.log(str)
// let n=5
// let string = "";
// for (let i = 1; i <= n; i++) {
//   // printing spaces
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);




// let n=5
// let str=""
// for (let i=0; i<n; i++){
//     for (let j=0; j<i; j++){
//         str=str+" "
//     }
//   for (let k = 0; k < 2 * (n-i) - 1; k++) {
//     str += "*";
//   }
//     str=str+"\n"
// }
// console.log(str)


// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 1; j <= n - i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < i * 2 - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }

// for (let i = 1; i <= n - 1; i++) {
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   for (let k = 0; k < 2 * (n-i) - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// let n =5;
// let str=""
// for (let i=1; i<=n; i++){
//     for (let j=0; j<n-i; j++){
//         str = str +" "
//     }
//     for (let k=0; k<2*i-1; k++){
//         str = str +"*"
//     }
//     str=str+"\n"   
// }

// for (let i=1; i<=n; i++){
//     for (let j=0; j<i; j++){
//         str = str +" "
//     }
//     for (let k=0; k<2*(n-i)-1; k++){
//         str = str +"*"
//     }
//     str=str+"\n"   
// }
// console.log(str)



// let n = 5;
// let string = "";
// // Reversed pyramid pattern
// for (let i = 0; i < n; i++) {
//   // printing spaces
//   for (let j = 0; j < i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < (n - i) * 2 - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// // pyramid pattern
// for (let i = 2; i <= n; i++) {
//   // printing spaces
//   for (let j = 0; j <n- i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k < i * 2 - 1; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// // console.log(string);


// let arr=[2,4,68,12,146,6,49]
// let sorted=arr.sort((a,b)=>{return a-b})
// console.log(sorted)


// for(i=1; i<=arr.length; i++){
//     for(j=0; j<arr.length; j++){
//         if(arr[i]<arr[j]){
//             let temp=arr[j]
//             arr[j]=arr[i]
//             arr[i]=temp
//         }

//     }
// }
// console.log(arr);


// for(i=1; i<=arr.length; i++){
//     let j=i-1
//         if(arr[i]<arr[j]){
//             let temp=arr[j]
//             arr[j]=arr[i]
//             arr[i]=temp
//             i=-1
//         }  
// }
// console.log(arr);



// function mergeSort(arr) {
//     if (arr.length < 2) {
//       return arr
//     }
//     const mid = Math.floor(arr.length / 2)
//     const leftArr = arr.slice(0, mid)
//     const rightArr = arr.slice(mid)
//     return merge(mergeSort(leftArr), mergeSort(rightArr))
//   }

//   function merge(leftArr, rightArr) {
//     const sortedArr = []
//     while (leftArr.length && rightArr.length) {
//       if (leftArr[0] <= rightArr[0]) {
//         sortedArr.push(leftArr.shift())
//       } else {
//         sortedArr.push(rightArr.shift())
//       }
//     }
//    return [...sortedArr, ...leftArr, ...rightArr]

//   }
// let arr=[2,4,68,12,146,6,49]

// console.log(mergeSort(arr))

// let quickSort =(arr)=>{
//     if(arr.length<2){
//         return arr
//     }else{
//         let pivot=arr[arr.length-1]
//         let left=[]
//         let right=[]
//         for(let i=0; i<arr.length-1; i++){
//             if(arr[i]<pivot){
//                 left.push(arr[i])
//             }else{
//                 right.push(arr[i])
//             }
//         }
//         return [...quickSort(left), pivot, ...quickSort(right)]
//     }


// }
// let arr=[2,4,68,12,146,6,49]
// console.log(quickSort(arr))







// let arr=[1,2,4,4,68,1,12,49,146,4,1,6,49]
// let removeDuplicates = (arr) => {
//     let uniqueArray = [];
//     arr.forEach((element) => {
//       if (!uniqueArray.includes(element)) {
//         uniqueArray.push(element);
//       }
//     });
//     return uniqueArray;
//   };
//   // let arr = readLine().split(" ").map(Number);

//   console.log(removeDuplicates(arr));
//   console.log([...new Set(arr)]);


// let removeDuplicates = (arr) => {
//   let uniqueArray = [];
//   let repetedArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (uniqueArray.indexOf(arr[i]) === -1) {
//       uniqueArray.push(arr[i]);
//     } else {
//       repetedArray.push(arr[[i]]);
//     }
//   }
//   return [uniqueArray, repetedArray];
// };
// console.log(removeDuplicates(arr));



// let uniqueArray = [];
// let repetedArray = [];
// for (let i = 0; i < arr.length; i++) {
//   if (!uniqueArray.includes(arr[i])) {
//     uniqueArray.push(arr[i]);
//   } else {
//     repetedArray.push(arr[[i]]);
//   }
// }
// console.log(uniqueArray);

// console.log(arr.concat(arr2));
// console.log(arr,arr2)


// let arr = [1,2,3,4,5,6,7,8,9]
// let arr2=arr.slice(-1,0)
// // arr.splice(2,6)
// console.log(arr2);

// let arr = [1,2,3,4,5,6,7,8,9]
// arr.splice(2,1,10,20,30)
// console.log(arr);

// let arr = [1,2,3,5,6,7,8,9]
// if(arr.includes(3)){
//     console.log("yes");
// }else{
//     console.log("no");
// }

// const fruits = ["Banana", "Orange", "Banana", "Mango"];
// let res=fruits.includes("Banana",3);
// console.log(res);

// let res=arr.find((elm)=>{

//         return elm>3


// })
// console.log(res);

let str1 = "Sourabh"
let str2 = "Sourabh"
console.log((Math.random()*10) +50);