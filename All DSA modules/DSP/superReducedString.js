function superReducedString(s) {
   
    s = s.split('');
 
    let test = 0;
 
    for(var i = 0; i < 100; i++){
 
        if(s.length === 0){
            // console.log('here')
            break;
        }
 
 
        if(s[test] === s[test+1]){
            s.splice(test, 2);
            test = test - 1;
            // console.log(s);
            continue;
        }
 
        test++;
       
    }
 
    // console.log(s)
 
    return s.length === 0 ? 'Empty String' : s.join('');
    // console.log(final);
    // return final;
 
 
 
}
 
let str1 = 'aab'; // 1
let str2 = 'abba'; // empty
superReducedString(str2);
