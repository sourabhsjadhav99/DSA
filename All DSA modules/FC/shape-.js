let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

// Define the required class here...
class Rectangle{
    consrtuctor(length,width){
        this.lingth=length;
        this.width=width;
    }
    calculatePerimeter(perimeter){
        perimeter = 2*(length+width);
       return perimeter;
    }
 
}


// DO NOT CHANGE ANYTHING BELOW THIS LINE
let input=readLine().split(" ");
let length = parseInt(input[0]);
let width = parseInt(input[1]); 
let rectangle =new Rectangle(length, width);
console.log(rectangle.calculatePerimeter());