let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let firstline = readLine().split(' ').map(Number)
let secondline = readLine().split(' ').map(Number)
for (let i=0; i<firstline[1]; i++){
    let thirdLine =readLine().split(' ').map(Number)
    let rev = 0
    while(secondline[thirdLine[1]]>0){
        rem = secondline[thirdLine[1]]%10
        rev=rev*10 +rem
        secondline[thirdLine[1]]=parseInt(secondline[thirdLine[1]]/10)
    }

    if(secondline[thirdLine[0]]==secondline[thirdLine[1]]){
        console.log("Siblings")
    }
    else if(secondline[thirdLine[0]]===rev){
        console.log("Siblings")

    }
    else{
        console.log("Not Siblings")
    }
}
