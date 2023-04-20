function alternatingCharacters(s) {
    // Write your code here
    let nextChar = s[0];
    let counter=0;
    for(let letter of s){
        if(letter==nextChar){
           nextChar=nextChar=="A"?"B":"A"
           }else{
            counter++
        }
    }
    return counter

}