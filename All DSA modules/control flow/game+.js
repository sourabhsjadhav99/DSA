let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}
let t=parseInt(readLine())
while(t--){
    let arr=readLine().split(' ')
    let firstMin=Number.MAX_VALUE;
    let secondMin=0;
    let thirdMin=0;
    for(let i=0;i<arr.length;i++){
        arr[i]=parseInt(arr[i]);
        if(arr[i]<firstMin){
            thirdMin=secondMin
            secondMin=firstMin
            firstMin=arr[i]
        }else if(arr[i]<secondMin){
            thirdMin=secondMin
            secondMin=arr[i]
        }else{
            thirdMin=arr[i]
        }
    }
    let rounds=firstMin;
    secondMin-=firstMin;
    thirdMin-=firstMin;
    rounds+=secondMin;
    thirdMin-=secondMin; 
    rounds+=Math.ceil(thirdMin/2)
    console.log(rounds)
}