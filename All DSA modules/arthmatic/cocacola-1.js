let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1];
}
let name = readLine();
let greeting = "Hello " + name + " !!!"
console.log(greeting);

let order = readLine();
let Corder = "You ordered " + order + ".";
console.log(Corder);
