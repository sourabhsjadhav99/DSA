let fs = require("fs");
let data = fs.readFileSync(0, "utf-8");
let idx = 0;
data = data.split("\n");

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
let array=[]
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
  print() {
    let current = this.head;
    while (current != null) {
    //   console.log(current.data);
    array.push(current.data)
      current = current.next;
    }
    
  }
}

let length1 = parseInt(readLine());
let arr1 = readLine().split(" ");
let length2 = parseInt(readLine());
let arr2 = readLine().split(" ");
let arr = [...arr1, ...arr2];
let sorted = arr.sort();
// console.log(sorted);
let l1 = new linkedList();
for (let i = 0; i < sorted.length; i++) {
  l1.insertLast(parseInt(sorted[i]));
}
l1.print()
console.log(array.join(" "))

//------------------------------
let dummyNode = new Node(0);
    let tail = dummyNode;
    while (true)
    {
        if(headA == null)
        {
            tail.next = headB;
            break;
        }
        if(headB == null)
        {
            tail.next = headA;
            break;
        }
        if(headA.data <= headB.data)
        {
            tail.next = headA;
            headA = headA.next;
        }
        else
        {
            tail.next = headB;
            headB = headB.next;
        }
        tail = tail.next;
    }
    return dummyNode.next;