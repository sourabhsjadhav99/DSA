let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim()
}

// -------- Do NOT edit anything above this line ----------
let noOfShoes = parseInt(readLine());
let sizeInShop = readLine().split(" ");
let noOfCustomers = parseInt(readLine());
let arr = []
for (let i = 0; i < noOfCustomers; i++) {
    let SizePrice = readLine().split(" ");
    arr.push(SizePrice);
}
let price = 0;
for (let i = 0; i < noOfShoes; i++) {
    console.log(sizeInShop[i])
    for (let j = 0; i < arr.length; j++) {
        if (arr[j].includes(sizeInShop[i])) {
            price = price + arr[j][1];
            let index=sizeInShop.indexOf(sizeInShop[i]);
            sizeInShop.splice(index,1)

        }
    }
}
//console.log(price)