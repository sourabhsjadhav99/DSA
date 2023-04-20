let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}
class Node {
  constructor(element) {
    this.data = element;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
  }
  insertTail(element) {
    let node = new Node(element);
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
  FindByPosion(pos) {
    pos = pos - 1;
    let value;
    if (pos == 0) {
      value = this.head.data;
    } else {
      let prev = null;
      let curr = this.head;
      for (let i = 0; i < pos; i++) {
        prev = curr;
        curr = curr.next;
      }
      value = curr.data;
    }
    console.log(value);
  }
  print() {
    let current = this.head;
    while (current != null) {
      console.log(current.data);
      current = current.next;
    }
  }
}

let l = new Linkedlist();
let testcases = parseInt(readLine());
for (let i = 0; i < testcases; i++) {
  let array = readLine().split(" ");
  for (let i = 0; i < array.length; i++) {
    l.insertTail(parseInt(array[i]));
  }
  let pos = parseInt(readLine());
  if (pos == 0) {
    console.log(-1);
  } else {
    l.FindByPosion(pos);
  }
}
