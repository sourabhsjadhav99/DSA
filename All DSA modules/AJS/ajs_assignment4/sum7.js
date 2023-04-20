function  lucky_sevens(input){
let result="false";
for(let i=0;i<input.length;i++){
    let sum=input[i]+input[i+1]+input[i+2];
    if(sum==7){
        result="true"
    }
}
return result;
}
let input=[1,6];
console.log(lucky_sevens(input))