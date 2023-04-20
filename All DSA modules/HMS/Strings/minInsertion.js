let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}


let testCases = parseInt(readLine());
for (let i = 0; i < testCases; i++) {
    let givenString = readLine();
    let revString = givenString.split("").reverse().join("");
    let count = 0;
    if (givenString === revString) {
        console.log(0);
    }
    else {
        for (let i = 0; i < givenString.length; i++) {
            if (givenString[i] == givenString[i+1]) {
                count = count + 1;
            }

        }
        console.log(count);
    }

}


// //-----------------------------------------------------------------------------
// //for numbers
// let arr = [11, 14, 15, 99];
// let n=arr.length;
// 		let ans = 0; 
//         let i=0,j=n-1		
// 		while (i<=j){			
// 			if (arr[i] == arr[j])
// 			{
// 				i++;
// 				j--;
// 			}		
// 			else if (arr[i] > arr[j])
// 			{
// 						j--;
// 				arr[j] += arr[j+1] ;
// 				ans++;
// 			}
// 			else
// 			{
// 				i++;
// 				arr[i] += arr[i-1];
// 				ans++;
// 			}
// 		}
// 		console.log(ans);