// let arr =[[1,2,3], [4,5,6], [7,8,9]]

// let arr2=[]

// for(let i=0; i<arr.length; i++){
//     for(let j=0; j<arr[0].length; j++){
//         arr2.push(arr[i][j])
//     }
// }
// console.log(arr2)


// let arr =[11,4,2,8,9]

// for (let i=0; i<arr.length; i++){
//     for (let j=0; j<arr.length; j++){
//         if(arr[i]>arr[j]){
//             let temp =arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
//         }

//     }
// }
// console.log(arr)


// let arr =[10,10,10,10]
// let arr =[10,20,15,2,23,90,67]
// let arr =[100,90,80,70,60,50]
// let arr=[10,20,30,40,50]
// let arr2=[]
// let bigger
// for(let i=1; i<arr.length; i++){
//     if(arr[0]==arr[i] && i==arr.length-1){
//         arr2.push(arr[i])
//     }
//     if(arr[i-1]<arr[i] && arr[i+1]<arr[i]){
//         arr2.push(arr[i])
//     }
//     if(arr[i-1]>arr[i] && i==arr.length-1){
//         arr2.push(arr[0])
//     }
//     if(arr[i-1]<arr[i] && i==arr.length-1){
//         arr2.push(arr[arr.length-1])
//     }
// }
//  console.log(arr2)


// function f (n) {
//     if (!n <= 1) {  n * f(n - 1)};
// }
// //  let g= f(4);
// console.log(f(4)) 

// function recursiveStringReverse(string) {


//     if (string.length <= 1) {
//         return string
//     }



//     let firstChar = string.charAt(0)
//     let lastChars = string.slice(1)


//     // MISSING LINE
//     return recursiveStringReverse(lastChars) + firstChar
// }
// console.log(recursiveStringReverse("sourabh"))


// function f(a=0){
//     console.log(a)

// }
// \(\f())\

// let arr =new Array(2)
// arr[1]=1
// arr[3]=3
// console.log(arr.length)
// for (let x of arr){
//     console.log("/t",x)
// }
// let str = `{'name':"sourabh"}`
// console.log(JSON.parse(str))
// function abc (){
//     let add=0
//     let i=10
//     while(i<1){
//         add=add+i
//         add=add*2
//         i-=1
//     }
//     console.log(add)
// }
// abc()

// let arr =["1", "2", "15","-7","300"]
// console.log(arr.sort())
// console.log(Math.round(-5.1))

// function segregate0and1(arr) {
//     let n= arr.length
//     let count = 0;
//     for (let i = 0; i < n; i++) {
//         if (arr[i] == 0)
//             count++;
//     }

   
//     for (let i = 0; i < count; i++){
//         arr[i] = 0;
//     }
  
//     for (let i = count; i < n; i++){
//         arr[i] = 1;
//     }
//     return arr
// } 
// let arr=[0, 1, 0, 1, 0, 0, 1, 1, 1, 0] 
// console.log(segregate0and1(arr))

// let arr =[1,1,2,2,2,7,8,9,2,3,6,7,7,9]
// let hashmap= new Map()
// for(let i=0; i< arr.length; i++){
//     if(!hashmap.has(arr[i])){
//         hashmap.set(arr[i],1)

//     }else{
//         hashmap.set(arr[i],hashmap.get(arr[i])+1)
//     }
// }


// let hashmap2= new Map()
// for ( [key, value] of hashmap){
//     // hashmap2.set(key,value)
//     console.log(Math.max(value))
    
// }
// // console.log(hashmap2)



// let car1_1={

// }

// class Car{
//     constructor(price, color) {
//         this.price=price,
//         this.color=color
//     }
// }

// class car2 extends Car{
//     constructor(price, color) {
//         super(price, color)
//     }
// }
// let new_car = new Car(50000, "red")

// let another_car =new car2(10000, "green")
// console.log(another_car)


// var isValid = function (s) {
//     const hashMap = { "(": ")", "{": "}", "[": "]" };
//     const stack = [];
//     for (let ch of s) {
//       if (hashMap[ch]) {
//         // ch is an opening bracket
//         stack.push(hashMap[ch]);
//         return 1
//       } else if (stack.length > 0 && stack[stack.length - 1] === ch) {
//         // ch is a closing bracket and top of stack matches
//         stack.pop();
//         return 2
//       } else {
//         // ch is a closing bracket and top of the stack doesn't match
//         return 0;
//       }
//     }
//     return stack.length === 0;
//   };

//   console.log(isValid("(()())"))

// function find_mistake(nums) {
// let n=nums.length
// let numm=0
// arr.sort(); 
//     for(let i = 0; i < n - 1; i++)
//     {
//         if(arr[i] == arr[i + 1])
//         {
//             numm=numm+arr[i];
//                 break;
//         }
//     }
     
//     for(let i = 1; i <= n; i++)
//     {
//         if(i != arr[i - 1])
//         {
//            numm=numm+i;
//                 break;
//         }
//     }
//     return numm
// }