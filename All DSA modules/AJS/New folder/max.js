// function maxMin(array){
//     let maxNum=array[0]
//     let minNum=array[0]
// for(let i=1; i<array.length; i++){
//     if(array[i]>maxNum){
//         maxNum=array[i];
//     }
//     if(array[i]<minNum){
//         minNum=array[i];
//     }
// }
// return [maxNum,minNum];
// }
// let array =[1,210,23,23,45];
// console.log(maxMin(array));

//[1,210,23,23,45]
// function reverseArray(arr) {
//   let revArr = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     revArr.push(arr[i]);
//   }
//   return revArr;
// }
// let arr = [1, 210, 23, 23, 45];
// console.log(reverseArray(arr));
let arr = [1, 210, 23, 23, 45];
let s=0;e=arr.length-1;
while(s<e){
    let temp=arr[s];//s=0 temp=1 arr[e]=1
    arr[s]=arr[e];//arr[s]=45
    arr[e]=temp;
    s++;
    e--;
}
console.log(arr);

