function Prime(number) {
    let result = "prime";
    count =0;
    if (number === 1 || number === 0) {
       result  = "not prime";
    }
    
    else if (number<0) {
        result  = "not prime";
    }
    
    else if (number > 1) {
    
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                result  = "not prime";
                break;
            }
        }
    }
    else{ 

    }
return result;
 }

console.log(Prime(5));