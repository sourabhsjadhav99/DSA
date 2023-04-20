let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Define your class here
// your class name should be 'RobotMovement' and method names as 'moveUp', 'moveDown', 'moveLeft' and 'moveRight' 
class RobotMovement{
    constructor(xCoordinate,yCoordinate){
        this.xCoordinate=xCoordinate;
        this.yCoordinate=yCoordinate;
    }
    moveUp(){
        return this.yCoordinate++;
    }
    moveDown(){
        return this.yCoordinate--;
    }
    moveLeft(){
        return this.xCoordinate--;
    }
    moveRight(){
        return this.xCoordinate++;
    }

}

// DO NOT CHANGE ANYTHING BELOW THIS LINE
let Num = parseInt(readLine());
let myRobotMove = new RobotMovement();
for (let index = 0; index  < Num; index ++) {
  let currentMovement = readLine();
  if (currentMovement === "up") {
    myRobotMove.moveUp();
  } else if (currentMovement === "down") {
    myRobotMove.moveDown();
  } else if (currentMovement === "left") {
    myRobotMove.moveLeft();
  } else {
    myRobotMove.moveRight();
  }
}
console.log(myRobotMove.xCoordinate);
console.log(myRobotMove.yCoordinate);