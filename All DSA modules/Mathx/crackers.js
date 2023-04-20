let given = readLine().split(" ").map(Number);
let K_Users = given[1];
let N_Crackres = given[0];
let result = 0
if (N_Crackres % K_Users !== 0) {
  result = 1;
}
console.log(result)