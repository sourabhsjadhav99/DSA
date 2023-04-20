function reverse(givenString, subStr) {
  return givenString.split(subStr).reverse().join(subStr);
}
let givenString = "Welcome to this Javascript Guide!";
let revStr = reverse(givenString, "");
let revWords = reverse(revStr, " ");
console.log(revWords);

//-------------------------------------------------------------------------------
// let givenString = "Welcome to this Javascript Guide!";
// let splitt=givenString.split(" ");
// let reverseWords="";
// for(let i=0; i<splitt.length;i++){
//     reverseWords=reverseWords+ splitt[i].split("").reverse().join("")+" "    
// }
// console.log(reverseWords);

// let string = "Welcome to this Javascript Guide!";
// let div = string.split(" ");
// let outputString = "";
// for(let i=0; i<div.length; i++){
//     outputString += div[i].split("").reverse().join("") + " ";
// }
// console.log(outputString);
