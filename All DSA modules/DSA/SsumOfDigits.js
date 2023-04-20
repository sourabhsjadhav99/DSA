
let reverse = (givenNuum) => {
  let reverseNum = ""
  if (givenNuum < 0) {
    reverseNum = "-"
    givenNuum = - givenNuum
  }

  while(givenNuum % 10 === 0){
    givenNuum = givenNuum / 10

  }

  while (givenNuum > 0) {
    let rem = givenNuum % 10;
    reverseNum = reverseNum + rem
    givenNuum = parseInt(givenNuum / 10);
  }

  return reverseNum
}


let givenNuum = -2500;
console.log(reverse(givenNuum));