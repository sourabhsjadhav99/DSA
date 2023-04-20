// //SORTING TECHNIQUES

//  //ACCENDING order(a-b)
// // DECCENDING order(b-a)

// let arr=[1,100,404,201,6,35];
// let sorted= arr.sort(function(a,b){return a-b;});
// console.log(sorted);
//----------------------------------------------------------------------------------
////without inbuild function=>nested loop
// let arr=[1,2,20,43,546,12,21,9];
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//     if(arr[j]>arr[i]){
//         let temp=arr[i];
//         arr[i]=arr[j];
//         arr[j]=temp;
//     }
//     }
// }
// console.log(arr)
//----------------------------------------------------------------------------------
////without inbuild function=>single loop
// let arr=[ '1', '2', '25', '3' ];
// for(let i=0;i<arr.length;i++){
//     if(arr[i+1]<arr[i]){
//         let temp=arr[i];
//         arr[i]=arr[i+1];
//         arr[i+1]=temp;
//         i=-1;
//     }  
// }
// console.log(arr)
//----------------------------------------------------------------------------------
// //Quick Sort-->best--O(nlog(n)), worst-O(n**2)
// //last element is pivot, elms lesser than pivot, elms greater than pivot

// function quickSort(arr) {
//     if (arr.length < 2) return arr
//     let pivot = arr[arr.length - 1]
//     let left = []
//     let right = []
//     for (let i = 0; i < arr.length-1; i++) {
//       if (arr[i] < pivot) {
//         left.push(arr[i])
//       } else {
//         right.push(arr[i])
//       }
//     }
//     return [...quickSort(left), pivot, ...quickSort(right)]
//   }
  
//   const arr = [8, 20, -2, 4, -6]
//   console.log(quickSort(arr))
//----------------------------------------------------------------------------------
// //Insertion Sort-->O(n**2)
// // first elm assume to be sorted and number to insert is second element
// // first sort 2 elm then sort 3,then 4,....
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let elementToInsert = arr[i];
      let j = i - 1; 
      while (j >= 0 && arr[j] > elementToInsert) {
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      arr[j + 1] = elementToInsert;
    }
    return arr;
  }
  let arr = ["AS", "KF", "ER", "DD", "JK"];
  console.log(insertionSort(arr));

// function insertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//       let numberToInsert = arr[i]
//       let j = i - 1
//       while (j >= 0 && arr[j] > numberToInsert) {
//         arr[j + 1] = arr[j]
//         j = j - 1
//       }
//       arr[j + 1] = numberToInsert
//     }
//     return arr;
//   }
  
//   const arr = [8, 20, -2, 4, -6]
//   console.log(insertionSort(arr))
//----------------------------------------------------------------------------------
// //Bubble Sort-->poor algo --swaping-- O(n**2)
// // to check at least one loop need to rum so do while loop
// function bubbleSort(arr) {
//     let swapped
//     do {
//       swapped = false
//       for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//           let temp = arr[i]
//           arr[i] = arr[i + 1]
//           arr[i + 1] = temp
//           swapped = true
//         }
//       }
//     } while (swapped)
//     return arr
//   }
  
//   const arr = [8, 20, -2, 4, -6]//[8,-2,4,-6,20]//[-2,4,-6,8,20]
//   console.log(bubbleSort(arr))
//----------------------------------------------------------------------------------
// Merge Sort--> O(nlog(n))--best time complexity of sorting
// devide array in to sub arrays till each sub array having one elm and then join these sub arrays with sorting-- compare first elm of each array

// function mergesort(arr) {
//     if (arr.length < 2) {
//       return arr
//     }
//     const mid = Math.floor(arr.length / 2)
//     const leftArr = arr.slice(0, mid)
//     const rightArr = arr.slice(mid)
//     return merge(mergesort(leftArr), mergesort(rightArr))
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
//     const resultArr = [...sortedArr, ...leftArr, ...rightArr]
//     return resultArr
//   }
//   const arr = [8, 20, -2, 4, -6]
//   console.log(mergesort(arr))

