// //By giving new array
// let arr=[1,2,8,4,66,3];
// let revArr=[];

// for(let i=arr.length-1;i>=0;i--){
//     revArr.push(arr[i])
// }
// console.log(revArr);
//--------------------------------------------------------------------------------
// //without giving new array (replace original array)
// let arr=[1,2,8,4,66,256,3];
// let s=0,e=arr.length-1;
// while(s<=e){
//     let temp=arr[s];
//     arr[s]=arr[e];
//     arr[e]=temp;
//     s=s+1;
//     e=e-1;
    
// }
// console.log(arr);
//--------------------------------------------------------------------------------
//by using direct function
let arr=[1,2,8,4,66,256,3];
let revArr=arr.reverse();
console.log(revArr);
//--------------------------------------------------------------------------------