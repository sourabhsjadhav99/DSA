let arr=[0,8,1,20,50,1,2];
// for(let i=0;i<arr.length;i++){
//     for(let j=0;j<arr.length;j++){
//         if(arr[j]>arr[i]){
//             let temp =arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }    
//     }
// }
// console.log(arr);
let larger =arr[0];
let be;
let array=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]>larger){
        be=larger
        larger=arr[i];
}
}
console.log(larger);
 console.log(be);