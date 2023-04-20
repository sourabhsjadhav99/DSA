let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

function gameOfDeath(person, k, index) {
  if (person.length == 1) {
    console.log(person[0]);
    return;
  }
  index = (index + k) % person.length;
  if (index > -1) {
    person.splice(index, 1);
  }
  gameOfDeath(person, k, index);
}

let testCases = parseInt(readLine());
for (let i = 0; i < testCases; i++) {
  let arr = readLine().split(" ").map(Number);
  let n = arr[0];
  let k = arr[1] - 1;
  var index = 0;
  var person = [];
  for (var j = 1; j <= n; j++) {
    person.push(j);
  }
  gameOfDeath(person, k, index);
}


