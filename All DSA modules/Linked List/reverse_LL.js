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

class LinkedList {
  constructor() {
    this.head = null;
    this.last_node = null;
  }
  append(data) {
    if (this.last_node === null) {
      this.head = new Node(data);
      this.last_node = this.head;
    } else {
      this.last_node.next = new Node(data);
      this.last_node = this.last_node.next;
    }
  }
  display() {
    var current = this.head;
    let res = "";
    while (current) {
      res = res + current.data + " ";
      current = current.next;
    }
    console.log(res);
  }
}
function reverse_llist(llist) {
  // Implement this
  let previous = null;
  let current = LinkedList.head;
  let future = null;
  while(current!=null){
    future=current.next;
    current.next=previous;
    previous=current;
    current=future;
  }
  LinkedList.head =previous
  return LinkedList.head;
}

let a_llist = new LinkedList();
let n = parseInt(readLine());
let l = readLine().split(" ");
l.map(Number);
for (data of l) {
  a_llist.append(data);
}
reverse_llist(a_llist);
a_llist.display();
