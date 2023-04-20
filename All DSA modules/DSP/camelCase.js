function camelcase(s) {
    // Write your code here
    let caps="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let count=1;
    for(let i=0;i<s.length;i++){
        if(caps.includes(s[i])){
            count++
        }
    }
    return count

}