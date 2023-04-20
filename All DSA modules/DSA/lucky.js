let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
// let num = parseInt(readLine())
// let arr=[]
// for (let i=0; i<num; i++){
//     arr.push(parseInt(readLine()))
// }
// let hashmap= new Map()
// for(let i=0; i< arr.length; i++){
//     if(!hashmap.has(arr[i])){
//         hashmap.set(arr[i],1)

//     }else{
//         hashmap.set(arr[i], hashmap.get(arr[i])+1)
//     }
// }
// let arr2 =[]
// for ( [key, value] of hashmap){
//     if (key===value){
//         arr2.push(key)
//     } 
// }
// if(arr2.length>=1){
//     console.log(arr2[0]);
// }
// else{
//     console.log(-1);
// }


//---------------------------------------------------------------------------------------------
// let length=parseInt(readLine());
// let arr=[]
// for(let i=0;i<length;i++){
//     arr.push(parseInt(readLine()))
// }
// let count=1;
// let flag=false;
// for(i=1;i<length;i++){
//     if(arr[i-1]===arr[i]){
//         count=count+1;
//     }else{
//         if(count===arr[i-1]){
//         console.log(count);
//         flag=true;
//         break;
//     }
//     count=1
//     }
// }
// if(arr[arr.length-1]===count){///for 1
//     console.log(count);
// }else if(flag===false){///if no lucky number
//     console.log(-1);
// }

//-------------------------------------------------------------
// let arr = readLine().split(" ").map(Number)
// let hashmap= new Map()
// for(let i=0; i< arr.length; i++){
//     if(!hashmap.has(arr[i])){
//         hashmap.set(arr[i],0)

//     }else{
//         hashmap.set(arr[i], hashmap.get(arr[i])+1)
//     }
// }
// let count =0
// for ( [key, value] of hashmap){
//     let x=0
//     if (value>0){
//          x= 2**value - 1
//          count = count+x
//     } 
// }
// console.log(count);
//-------------------------------------------------
// let length = parseInt(readLine());
// let arr = [];
// // let ans=[];

// for (let i=0; i<length; i++ ){
//    arr.push(readLine().trim().split(" ").map(Number));                                          
// }

// for (let i=0; i<arr[0].length; i++ ){
//    let temp=[];
//    for (let j=0; j<length; j++ ){
//      temp.push(arr[j][i]);
//     }
//     // ans.push(temp);
//     console.log(temp)
// 	  console.log(...temp);
// }


console.log(26%44)