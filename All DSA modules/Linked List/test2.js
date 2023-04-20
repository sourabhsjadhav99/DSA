let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class linkedList {
  constructor() {
    this.head = null;
  }
  insertLast(elem) {
    let node = new Node(elem);
    if (this.head == null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next != null) {
        current = current.next;
      }
      current.next = node;
    }
  }
  insertFirst(elem){
    let node = new Node(elem);
    if (this.head == null) {
        this.head = node;
      } else {
        node.next=this.head;
        this.head=node;
      }


  }
  print() {
    let current = this.head;
    while (current != null) {
       console.log(current.data);
      current = current.next;
    }
    
  }
}
let l1= new linkedList()
// let testCases=parseInt(readLine());
let arr=readLine().split(" ");
console.log(arr)
for(let i=0; i<arr.length;i++){
    if(2*i+1==0){
        l1.insertFirst(arr[2*i])

    }else{
        l1.insertLast(arr[2*i])

    }
}
l1.print()