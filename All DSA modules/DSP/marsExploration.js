function marsExploration(s) {
    // Write your code here
 
    let strToArr = s.split('');
    // console.log("strToArr: ", strToArr);
 
    let finalArr = [];
 
    let changedLetters = 0;
 
   
   
 
    let a = strToArr.slice(0, 3);
    // console.log(a);
 
 
    for(let i = 0; i < strToArr.length; i = i + 3){
        finalArr.push(strToArr.slice(i, i+3))
    }
 
    // console.log("finalArr: ", finalArr);
 
    finalArr.forEach(el=> {
        // console.log(el)
 
        if(el[0] !== 'S'){
            changedLetters++
        }
 
        if(el[1] !== 'O'){
            changedLetters++
        }
 
        if(el[2] !== 'S'){
            changedLetters++
        }
 
 
    });
 
    console.log("changedLetters: ", changedLetters);
    return changedLetters;
 
 
 
// end of the function
}
 
let input1 = 'SOSSPSSQSSOR';
let input2 = 'QQQ'
marsExploration(input1)