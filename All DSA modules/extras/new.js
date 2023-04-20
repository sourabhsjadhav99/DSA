let both=[];
let arr1=["1","3"];
for (let i=0; i<arr1.length;i++){
    both.push(arr1[i])
}
let arr2=["2"];
for (let i=0; i<arr2.length;i++){
    both.push(arr2[i])
}

both = both.sort()
if (both.length%2===0){
    mean =parseInt(both[Math.floor((both.length-1)/2)])+parseInt(both[Math.ceil((both.length-1)/2)])
    console.log(mean/2);
}else if (both.length%2!=0){
    mean = (both[parseInt((both.length-1)/2)])
    console.log(mean);
}
 