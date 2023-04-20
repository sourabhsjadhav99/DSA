let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// for loop one below other
let length = parseInt(readLine());
let b=10;
for (a=1; a<=length; a++)
{let num=parseInt(readLine());
  b = b + num;
  console.log(b);
}

//---------------
//for loop- seprated by space
// let length = parseInt(readLine());
// let b=10;
// let x = readLine().split(" ");
// for (a=0; a<length; a++)
// {let num=parseInt(x[a]);

//   b = b + num;

// }
// console.log(b);
//--------------------------------------------
// while loop - one below other 

// let length = parseInt(readLine());
// let b=10;
// a=0;
// while ( a<length)
// {let num=parseInt(readLine());
//   b = b + num;
//   a++;
 
// }
// console.log(b);
//------------
// while loop- seprated by space
// let length = parseInt(readLine());
// let x = readLine().split(" ");
// let b=10;
// a=0;
// while ( a<length)
// {let num=parseInt(x[a]);
//   b = b + num;
//   a++;
 
// }
// console.log(b);
 //-----------
