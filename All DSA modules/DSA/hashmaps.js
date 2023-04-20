let name="mississippii"
let arr = name.split("")
// console.log(arr);
let hashmap= new Map()
for(let i=0; i< arr.length; i++){
    if(!hashmap.has(arr[i])){
        hashmap.set(arr[i],1)

    }else{
        hashmap.set(arr[i],hashmap.get(arr[i])+1)
    }
}
for ( [key, value] of hashmap){
    console.log(key + "-->" + value);
}