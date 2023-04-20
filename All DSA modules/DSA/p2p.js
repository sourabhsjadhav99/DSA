// // [1, 2, 3, 1, 1, 3] => [1,1,1,3,3,2]
// let arr =[1, 2, 3, 1, 1, 3]

// let newmap = new Map()
// for (let i=0; i<arr.length; i++){
//     if(!newmap.has(arr[i])){
//         newmap.set(arr[i],1)
//     }else{
//         newmap.set(arr[i], newmap.get(arr[i])+1)
//     }
// }
// console.log(newmap)


// for (let [key,value] of newmap){
//     let highest = -Infinity
//     let secHighest = -Infinity
//     if(value>highest){
//         secHighest=highest
//         highest=value
//     }
//     if(value>secHighest){
//         secHighest=value
//     }

//     console.log(highest, secHighest);
// }


//  let arr= [1,2,3,4,5,6,7,8,9,10] 
//  let arr2=[2,3,4]
//  let arr3=[]
//  for (let i=0; i<arr.length; i++){
//     if(!arr2.includes(arr[i])){
//         arr3.push(arr[i])
//     }
//  }
//  console.log(arr3)
// let obj={
//     name:"Sourabh",
//     Lname:"Jadhav"
// }
// console.log(obj["Lname"])


// var Employee = {
//     company: 'xyz'
// }
// var emp1 = Object.create(Employee);
// delete emp1.company
// console.log(emp1.company);

// const arrayOfObjects = [
//     { name: 'John', age: 30, city: 'New York' },
//     { name: 'Jane', age: 25, citys: 'Los Angeles' },
//     { name: 'Mike', age: 35, city: 'Chicago' },
//     { name: 'Emily', age: 28 }
// ];
// const filteredObjects = arrayOfObjects.filter(object =>
//     Object.keys(object).includes('citys'));
// console.log(filteredObjects);

for(var i=0;i<10;i++) {
    setTimeout(function() {
    console.log(i);
    }, 1000)
    }
    