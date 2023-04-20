
let arr="anagram".split("")
let hashmap1= new Map()
for(let i=0; i< arr.length; i++){
    if(!hashmap1.has(arr[i])){
        hashmap1.set(arr[i],1)

    }else{
        hashmap1.set(arr[i],hashmap1.get(arr[i])+1)
    }2
}

let arr2="anagram".split("")
let hashmap2= new Map()
for(let i=0; i< arr2.length; i++){
    if(!hashmap2.has(arr2[i])){
        hashmap2.set(arr2[i],1)

    }else{
        hashmap2.set(arr2[i],hashmap2.get(arr2[i])+1)
    }
}
console.log(hashmap1,hashmap2)