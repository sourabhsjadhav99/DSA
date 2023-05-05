var isPalindrome = function(s) {
    let start=0;
    let end = s.length-1
    let result
    while(start<=end){
        if(s[start]===s[end]){
            result=true
        }else{
            result=false
            break
        }
        end--;
        start++

    }
    return result
    
};

console.log(isPalindrome("racecare"))