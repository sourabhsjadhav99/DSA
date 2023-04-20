let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

//let alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ''];
// let revAlpha = alpha.reverse();
// let integers = parseInt(readLine());
// let str = "";
// for (let i = 0; i < integers; i++) {
//     let given = parseInt(readLine());
//     if (given <= 26) {
//         console.log(revAlpha[given]);
//     } else if (given > 26) {
//         let x = parseInt(given / 26);
//         let y = given - (26 * x);

//         let a = revAlpha[x]
//         let b = revAlpha[y]
//         console.log(a + b);
//     }
// }


function exelcolumn(col_num) {
    let alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    let columnName = [];
    while (col_num > 0) {
        let num = col_num % alpha.length;
        console.log(num)
        if (num == 0) {
            columnName.unshift(alpha[num]);
            col_num--;
        } else {
            columnName.unshift(alpha[alpha.length - num]);

        }
        col_num = Math.floor(col_num / alpha.length);
        console.log(col_num);
        console.log("--");

    }
    return columnName.join("")
}
let n = parseInt(readLine());
for (let i = 0; i < n; i++) {
    let col_num = parseInt(readLine());
//    console.log(exelcolumn(col_num))
exelcolumn(col_num)
   
}
console.log(30%26);