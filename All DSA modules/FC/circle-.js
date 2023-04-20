let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------



// Your class should be named `Circle`.
// Method to get area should be named `getArea`
// Method to get circumference should be named `getCircumference`.
// Your class should take radius `r` as input when creating an object.
class Circle{
    constructor(r){
        this.radius= r;
    }
    getArea(){
        console.log(this.radius);
        if (this.radius<=0){
        return 0;
      }else {
        let x=Math.ceil(3.14*this.radius**2);
         return x;
      }
    }
    getCircumference(){
        if (this.radius<=0){
       return 0;
      }else{
       let x= Math.ceil(2*3.14*this.radius);
        return x;
      }
    }

}

// -------- Do NOT edit anything below this line ----------
let r = parseInt(readLine());
let oneCircle = new Circle(r);
console.log(oneCircle.getArea());
console.log(oneCircle.getCircumference());