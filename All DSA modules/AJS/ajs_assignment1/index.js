function numberofdays(M) {
  let numOfDays = "Please enter a valid month";
  if (M == 1 || M == 3 || M == 5 || M == 7 || M == 8 || M == 10 || M == 12) {
    numOfDays = 31;
  } else if (M == 4 || M == 6 || M == 9 || M == 11) {
    numOfDays = 30;
  } else if (M == 2) {
    numOfDays = 28;
  }
  return numOfDays;
}
console.log(numberofdays(6));
console.log(numberofdays(8));
console.log(numberofdays(15));
console.log(numberofdays(3));


// function numberofdays (M, year = 2022) {
//     return new Date(year, M, 0).getDate();
// };
// console.log(numberofdays(11));