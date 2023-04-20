const { reverse } = require("dns");
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
  reverse() {
    let pre = null;
    let current = this.head;
    let future = null;
    while (current != null) {
      future = current.next;
      current.next = pre;
      pre = current;
      current = future;
    }
    this.head = pre;
    return this.head;
  }
}
let length = parseInt(readLine());
let l = new Linkedlist();
let array = readLine().split(" ");
for (let i = array.length - 1; i >= 0; i--) {
  l.insertTail(parseInt(array[i]));
}
console.log(l.reverse());
