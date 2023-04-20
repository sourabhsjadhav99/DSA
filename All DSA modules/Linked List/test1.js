let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------


class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}
 
class LinkedList{
    constructor(){
        this.head = null
        this.last_node = null
    }
    append(data){
        if (this.last_node === null){
            this.head =new Node(data)
            this.last_node = this.head
        }
        else{
            this.last_node.next =new Node(data)
            this.last_node = this.last_node.next
        }
        }
    display(){
        var current = this.head
        let res=''
        while(current){
            res=res+current.data+" "

            current = current.next
        }
        console.log(res)
    }
}
 
function reverse_llist(llist){
    let before = null
    let current = llist.head
    if (current === Null){
        return
    }
    let after = current.next
    while(after){
        current.next = before
        before = current
        current = after
        after = after.next
    current.next = before
    llist.head = current
    }
}
function mergeLists(headA, headB){
    //imlpement this function
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
}

// Create 2 lists
var listA =new LinkedList()
var listB =new LinkedList()
// Add elements to the list in sorted order
let n1 = parseInt(readLine())
let l1=readLine().split(" ")
l1.map(Number)
let n2 = parseInt(readLine())
let l2=readLine().split(" ")
l2.map(Number)
for(i of l1){
    listA.append(parseInt(i))
}
for(i of l2){
    listB.append(parseInt(i))
}
// Call the merge function
listA.head = mergeLists(listA.head, listB.head)

// Display merged list
listA.display()