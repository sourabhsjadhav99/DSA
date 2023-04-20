// //sorting og array
// let arr=[1,2,8,4,66,3];
// let sorted= arr.sort();
// console.log(sorted)
//----------------------------------------------------------------------------------
// //when number is greater than 9 ACCENDING order(a-b)
// let arr=[1,100,404,201,6,35];
// let sorted= arr.sort(function(a,b){return a-b;});
// console.log(sorted);
//----------------------------------------------------------------------------------
// //when number is greater than 9 DECCENDING order(b-a)
let arr=[1,100,404,201,6,35];
let sorted= arr.sort(function(a,b){return b-a;});
console.log(sorted);
//----------------------------------------------------------------------------------
////without inbuild function=>nested loop
// let arr=[1,2,20,43,12,21,9];
// for(let i=1;i<arr.length;i++){
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