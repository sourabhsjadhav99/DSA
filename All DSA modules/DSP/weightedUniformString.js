function weightedUniformStrings(s, queries) {
    let arr1 = s.split("");
    // console.log("arr1: ", arr1);
 
    let unique = [...new Set(arr1)];
    // console.log("unique: ", unique);
 
    let temp = [];
 
    for (var i = 0; i < unique.length; i++) {
        let el = unique[i];
        // console.log(el);
 
        let repeatCount = 1;
 
        for (var j = i; j < arr1.length; j++) {
            let el2 = arr1[j];
            // console.log(el2);
 
            let test = el === el2;
            // console.log(test);
 
            if (test) {
                temp.push(el.repeat(repeatCount));
                repeatCount++;
            }
        }
 
        // console.log("-----------");
 
        // end of for loop i
    }
 
    // console.log("-----------");
    // console.log(temp);
 
 
    // NOW SOLVE THE WEIGHT TABLE
 
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
   
 
    let wghtArr = temp.map(el=> {
 
        let test1 = el.split('');
        // console.log("test1: ", test1);
 
        let temp = 0;
 
        test1.forEach(el1=> {
            temp = temp + (alphabet.indexOf(el1)+1);
 
        })
 
        return temp;
 
        // end of map
    });
 
    // console.log(wghtArr);
 
    // final arr
 
    let finalArr = queries.map(el=> {
        return wghtArr.indexOf(el) !== -1 ? 'Yes' : 'No'
    });
 
    // console.log(finalArr);
 
    return finalArr;
 
 
 
    // ! end of the function
}
 
let s1 = "abbcccdddd";
let q1 = [1, 7, 5, 4, 15];
weightedUniformStrings(s1, q1);

///////////////////
// function weightedUniformStrings(s, queries) {
 
//     let alphabet = "abcdefghijklmnopqrstuvwxyz";
 
//     // extract all letter groups
//     let allGroupsArr = s.match(/([a-z])\1*/g);
//     // console.log(allGroupsArr);
 
//     // itterate throught letter group and create an array with ALL weights
 
//     let allWeightsArr = [];
 
//     allGroupsArr.forEach(el=> {
//         let weight = alphabet.indexOf(el[0])+1;
//         // console.log("weight: ", weight);
 
//         for(var i = 0; i < el.length; i++){
//             allWeightsArr.push(weight * (i+1))
//         }
//     });
 
 
//     // map throught the queries and see if they exist in allWeightsArr return YES if found or NO if not found
//      let final = queries.map(el=> {
//           return allWeightsArr.indexOf(el) > -1 ? 'Yes' : 'No'
//      });
 
//      // console.log("final: ", final);
//      return final;
 
 
//     // ! end of the function
// }
 
// let s1 = "abbcccdddd";
// let q1 = [1, 7, 5, 4, 15];
// weightedUniformStrings(s1, q1);