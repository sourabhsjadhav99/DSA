
// let arr = [1, 2, 3, 4, 5, 6];

// console.log(rearrange(arr))
// function rearrange(arr){
//     let alternate =[]
//     let flag =true
//     let start =0
//     let end =arr.length-1
//     for(let i=0; i< arr.length; i++){
//        if(flag){
//         alternate[i]=arr[end--]
//        }else{
//         alternate[i]=arr[start++]
//        }
//        flag=!flag
//     }
//     return alternate
// }

// let arr = [1, 2, 3, 4, 5, 6, 12];
// let bigNo=arr.sort((a,b)=>`${b}${a}`-`${a}${b}`).join("")
// console.log(bigNo)

// let s = "loveleetcode", c = "e"
// console.log(shortestToChar(s,c)) 

// function shortestToChar(s,c){
//     let prev=s.indexOf(c)
//     let next =prev
//     let arr=[]

//     for(let i=0; i<s.length; i++){
//         if(s[i]===c){
//             prev=i;
//             next=s.indexOf(c, prev+1)
//         }
//         arr.push(Math.min(Math.abs(prev-i), Math.abs(next-i) ))
//     }
//     return arr
// }



// function findMissingNumbers(arr) {
//     let hashmap= new Map()
//     for(let i=0; i< arr.length; i++){
//         if(!hashmap.has(arr[i])){
//             hashmap.set(arr[i],1)
    
//         }else{
//             hashmap.set(arr[i],hashmap.get(arr[i])+1)
//         }
//     }
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);
//     const missing = [];
//     for(let i=min; i<=max; i++){
//         if(!hashmap.has(i)){
//             missing.push(i)
//         }
//     }
//     return missing;
//   }

//   const arr = [2,15, 3, 5, 7, 9];
// const missing = findMissingNumbers(arr);
// console.log(missing); 

// const arr = [2,15, 3, 5, 7, 9];
// let n=3
// console.log(nthSmallest(arr,n))
// function nthSmallest(arr, n){
//     let left= []
//     let right =[]
//     let pivotLength=arr.length-1
//     let pivot = arr[pivotLength]
//     for(let i=0; i<pivotLength; i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else if(arr[i]>pivot){
//             right.push(arr[i])
//         }
//     }

//     if(n===left.length+1){
//         return pivot
//     }else if(n<=left.length){
//         return nthSmallest(left, n)

//     }else{
//         return nthSmallest(left, n-1-left.length)
//     }
// }



// 	let arr= [0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1 ];
// 	let arr_size = arr.length;
// 	console.log(sort012(arr, arr_size))

//    function sort012(arr, len){
//     let left =0
//     let right =len-1
//     let mid=0
//     let temp=0
//     while(mid<=right){
//         if(arr[mid]===0){
//             temp=arr[left]
//             arr[left]=arr[mid]
//             arr[mid]=temp
//             mid++
//             left++

//         }else if(arr[mid]===1){
//             mid++

//         }else{
//             temp=arr[mid]
//             arr[mid]=arr[right]
//             arr[right]=temp
//             right--


//         }
//     }
//   return arr

//     }

 
const arr = [1, 2, 3, 4, 5];
const triplet = findTriplets(arr);
console.log(triplet); // Output: [[2, 3, 5], [3, 4, 7]]

function findTriplets(arr){
    let triplets=[]
    for(let i=arr.length-1; i>= 2; i--){

        let left=0
        let right=i-1
        while(left<right){
            if(arr[left]+arr[right]===arr[i]){
                triplets.push([arr[left], arr[right], arr[i]])
                left++
                right--

            }else if(arr[left]+arr[right]<arr[i]){
                left++
            }else{
                right--
            }
        }
  

}
return triplets
}