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
    consructor(r){
        this.r= r;
    }
    getArea(){
        if (this.r>0){
        return Math.ceil(3.14*this.r**2);
    }else{
        return 0;
    }
}
    getCircumference(){
        if (this.r>0){
        return Math.ceil(2*3.14*this.r);
    }
    else{
        return 0;
    }
}

    }

// -------- Do NOT edit anything below this line ----------
let r = parseInt(readLine());
let oneCircle = new Circle(r);
console.log(oneCircle.getArea());
console.log(oneCircle.getCircumference());