
function findMin(x){
    let ans = [];
for (let i =arr.length-1; i >= 0; i--){
            	while (x>= arr[i]){
				x = x-arr[i];
				ans.push(arr[i]);
			}
		}
			console.log(ans.length);	
}
let arr=[1, 2, 5, 10, 20,50, 100, 500, 1000];
y = 64;
findMin(y);

//------------------------------------
// let arr = [1, 2, 5, 10, 20, 50, 100, 500,1000] 
// let n = 1050 
// let ans = 0
// let i = arr.length-1
// while (n>0){
// ans = ans + parseInt(n/arr[i])
// n = n% arr[i]
// i--
// }
// console.log(ans)