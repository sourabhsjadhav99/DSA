class LinkedList {
  constructor(data) {
    this.head = {
      value: data,
      next: null,
    };
    this.tail = this.head;
    this.size = 1;
  }
  //insert at tail--------------------------------------------------------------------------
  insertAtTail(nodedata) {
    let newNode = {
      value: nodedata,
      next: null,
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.size += 1;
  }
  //insert at head---------------------------------------------------------------------------
  insertAtHead(nodedata) {
    let newNode = {
      value: nodedata,
      next: null,
    };
    newNode.next = this.head;
    this.head = newNode;
    this.size += 1;
  }

  //insert at position -----------------------------------------------------------------------
  traversing(req) {
    let count = 0;
    let currentNode = this.head;
    while (count != req) {
      count = count + 1;
      currentNode = currentNode.next;
    }
    return currentNode;
  }
  insertAtPosition(index, nodedata) {
    let newNode = {
      value: nodedata,
      next: null,
    };
    let initialNode = this.traversing(index - 1);
    let finalNode = initialNode.next;
    initialNode.next = newNode;
    newNode.next = finalNode;
    this.size += 1;
  }
  //delete---------------------------------------------------------------------------
  delete(index) {
    let initialNode = this.traversing(index - 1);
    let unwantedNode = initialNode.next;
    let finalNode = unwantedNode.next;
    initialNode.next = finalNode;
    this.size = this.size - 1;
  }
  //reverse---------------------------------------------------------------------------
  reverse() {
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
  }
//   print(){
//     let current = this.head;
//     while(current){
//         console.log(current.value);
//         current=current.next
//     }
//   }
}
let list1 = new LinkedList(200);
list1.insertAtTail(300);
list1.insertAtTail(400);
list1.insertAtHead(100);
list1.insertAtHead(0);
list1.insertAtPosition(1, 50);
// list1.delete(1)
list1.reverse()
// console.log(list1);

// list1.print()
// 1 2 3 4 5
