let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let strings = readLine().split(" ");
let lowerStrings = [];
for (let i = 0; i < strings.length; i++) {
    lowerStrings.push(strings[i].toLowerCase())

}
let integers = readLine().split(" ");
let indexOfBoss = lowerStrings.indexOf("boss");
let sum = 0;
for (let i = 0; i < integers.length; i++) {
    sum = sum + parseInt(integers[i]);
}
if(indexOfBoss>=0 && indexOfBoss<integers.length){
    sum=sum + parseInt(integers[indexOfBoss]);
}
let happinessRating = parseFloat(sum / integers.length);
if (happinessRating <= 5) {
    console.log("They fired me");
} else {
    console.log("I still have a job");
}