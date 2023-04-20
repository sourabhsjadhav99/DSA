
let arr=[1,2,3,5,1,5,9,1,2,8];
let dupArr=[];
let len=arr.length;
for(let i=0;i<len;i++){
    if(dupArr.indexOf(arr[i])===-1){
        dupArr.push(arr[i]);
    }
}

console.log(dupArr);

//-----------------------------------------------------------------------
// let arr=[1,1,1,2,2,3,5,5,8,9];
// let dupArr=[];
// let len=arr.length;
// let temp;
// for(let i=0;i<len;i++){
//     if(arr[i]!=temp){
//         dupArr.push(arr[i]);
//         temp=arr[i];
//     }
  
// }
// console.log(dupArr);