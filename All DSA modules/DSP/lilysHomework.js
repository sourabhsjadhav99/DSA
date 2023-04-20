function checkAscending(arr, doReverse=false){
 
    let sorted = arr.slice().sort((a,b)=> a-b);
    // console.log(arr)
    // console.log("sorted: ", sorted);
 
    if(doReverse){
        sorted.reverse();
    }
 
    let hash = new Map();
    arr.forEach((el, i)=> hash.set(el, i))
    // console.log(hash);
 
 
    let count = 0;
 
    for(var i = 0; i < arr.length; i++){
 
        // console.log(arr);
 
        let elOrg = arr[i];
        // console.log("elOrg: ", elOrg);
        let elSorted = sorted[i];
        // console.log("elSorted: ", elSorted);
       
        if(elOrg === elSorted){
            // console.log('here')
            continue;
        }
 
        if(elOrg !== elSorted){
            // console.log('here');
 
            // search for position of both elements in the hash and swap them both in Hash and in Arr
            let hashSorted = hash.get(elSorted);
            // console.log(hashSorted);
            let hashOrg = hash.get(elOrg);
            // console.log(hashOrg);
 
            // swap hash
            hash.set(elOrg, hashSorted);
            hash.set(elSorted, hashOrg);
 
            // swap the elements in the array, by mapping it to hash
            arr[hash.get(elOrg)] = elOrg;
            arr[hash.get(elSorted)] = elSorted;
 
            count++
 
        }
 
 
        // end of for loop i
    }
 
 
    // console.log(hash);
    // console.log(arr);
    // console.log(count);
    return count;
 
 
    // end of check ascending
}
 
 
 
function lilysHomework(arr) {
   
    let asc = checkAscending(arr.slice(), false);
    let des = checkAscending(arr.slice(), true);
 
    let min = Math.min(asc, des);
    // console.log(min);
 
    return min;
 
    // ! end of function
}
