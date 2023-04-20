// // set method=>array can have duplicates values but set can not.
// let arr=[1,2,2,3,3,3,4,4,5];
// let revArr=[...new Set(arr)];
// console.log(revArr);
//----------------------------------------------------------------------------------
// let arr=[1,2,2,3,3,3,4,4,5];
// let dupArr=[];
// let len=arr.length;
// for(let i=0;i<len;i++){
//     if(dupArr.indexOf(arr[i])===-1){
//         dupArr.push(arr[i]);
//     }
// }
// console.log(dupArr);
//----------------------------------------------------------------------------------
let arr=[1,2,2,3,3,3,4,4,5];
let dupArr=[];
let len=arr.length;
let temp;
for(let i=0;i<len;i++){
    if(arr[i]!==temp){
        dupArr.push(arr[i]);
        temp=arr[i];
    }

}
console.log(temp)
console.log(dupArr);