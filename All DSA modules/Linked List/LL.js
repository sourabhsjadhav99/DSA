class Node {
  constructor(element) {
    this.data = element;
    this.next = null;
  }
}

class Linkedlist {
  constructor() {
    this.head = null;
    this.size = 0;
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
    this.size++;
  }
  insertHead(element) {
    let node = new Node(element);
    if (this.head == null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  insertPosion(element, pos) {
    let node = new Node(element);
    if (pos == 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let prev=null;
      let curr=this.head;
      for (let i = 0; i < pos; i++) {
        prev = curr;
        curr = curr.next;
      }
      node.next = curr;
      prev.next = node;
    }
    this.size++;
  }
 FindByPosion(pos) {
  let value
    if (pos == 0) {
      value=this.head.data
    } else {
      let prev=null;
      let curr=this.head;
      for (let i = 0; i < pos; i++) {
        prev = curr;
        curr = curr.next;
      }
     value=curr.data
    }
    console.log(value)
    // this.size++;
  }
  removeTail() {
    let prev = null;
    let curr = this.head;
    while (curr.next != null) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = null;
    this.size--;
    console.log("tail:", curr.data);
  }
  removeHead() {
    let curr = this.head;
    this.head = this.head.next;
    curr.next = null;
    this.size--;
    console.log("head:",curr.data);
  }
  removePos(pos) {
    if (pos == 0) {
      let curr = this.head;
      this.head = this.head.next;
      curr.next = null;
      console.log("removed:", curr.data);
    } else {
      let prev = null;
      let curr = this.head;
      for (let i = 0; i < pos; i++) {
        prev = curr;
        curr = curr.next;
      }
      prev.next = curr.next;
      console.log("removed:", curr.data);
    }
    this.size--;
  }
  print() {
    let current = this.head;
    while (current!=null) {
      console.log(current.data);
      current = current.next;
    }
  }
}
let l = new Linkedlist();
l.insertTail(10);
l.insertTail(20);
l.insertTail(40);
//  l.print()
l.FindByPosion(1)
// l.insertPosion(30,2)
// l.print();
// console.log("--------------------")
// let m = new Link();
// m.insertHead(10);
// m.insertHead(20);
// m.insertHead(30);
// m.removeHead()
// m.removeTail()
// m.removePos(0)
// m.print();
// console.log("--------------------")
