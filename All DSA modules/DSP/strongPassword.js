function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
 
    console.log(n); // needs to be at least 6
    const numbers = "0123456789"  // 1 digit min
    const lower_case = "abcdefghijklmnopqrstuvwxyz" // 1 small
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" // 1 upper
    const special_characters = "!@#$%^&*()-+" // 1 symbol
 
    let strongPass = password;
    let addCount = 0;
 
 
    // test for numbers
    let regNumTest = /\d/.test(password);
    console.log("regNumTest: ", regNumTest);
 
    if(!regNumTest){
        strongPass = strongPass + '1'
        addCount++
    }
 
    // test for small letter
 
    let regSmallTest = /[a-z]/.test(password);
    console.log("regSmallTest: ", regSmallTest);
 
    if(!regSmallTest){
        strongPass = strongPass + 'a';
        addCount++
    }
 
    // tedt for capital
 
    let regCapTest = /[A-Z]/.test(password);
    console.log("regCapTest: ", regSmallTest);
 
    if(!regCapTest){
        strongPass = strongPass + 'A';
        addCount++
    }
 
    // test for symbol
 
    let regSymTest = /[!@#$%^&*(\)\-\+]/.test(password);
    console.log("regSymTest: ", regSmallTest);
 
    if(!regSymTest){
        strongPass = strongPass + '*';
        addCount++
    }
 
    // test for length
 
    let lengthDif = 6 - strongPass.length;
    console.log("lengthDif: ", lengthDif);
 
 
    if(lengthDif > 0){
        console.log('added some length')
        strongPass = strongPass + numbers.slice(0, lengthDif)
       addCount = addCount + lengthDif
    }
 
    console.log(password);
    console.log(strongPass);
    console.log(addCount);
 
    return addCount;
 
 
    // ! end of function
}
 
let p1 = '#HackerRank';
let n1 = p1.length;
 
let p2 = 'Ab1';
let n2 = p2.length;
 
let p3 = 'AUzs-nV';
let n3 = p3.length;
 
minimumNumber(n3, p3);