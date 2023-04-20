// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
// 	idx++;
// 	return data[idx - 1].trim();
// }

// -------- Do NOT edit anything above this line ----------
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
        print(){
    let current = this.head;
    while(current){
        console.log(current.value);
        current=current.next
    }
  }
}
let list1= new LinkedList(0)
// list1.insertAtTail(1)
// list1.insertAtTail(2)
// list1.insertAtTail(4)

let inputs = "1 2 3 4 5".split(" ");
for(let i=0; i<inputs.length; i++){
    list1= new LinkedList(inputs[0])
    list1.insertAtTail(parseInt(inputs[i+1]))
}
// console.log(list1);
list1.print()