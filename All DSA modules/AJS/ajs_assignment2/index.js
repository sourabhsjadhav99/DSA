function compoundInterest (principal,rateOfInterest,time){
    let comInt = principal*((1 + rateOfInterest/100)**time-1);
    console.log(comInt.toFixed(2))
}

compoundInterest(100,1,2);
compoundInterest(1,99,2);

//p*(1+r/100)**t