let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format 


// javascript program to detect loop in the linked list 

// Node class 
class Node{ 

	// Constructor to initialize the node object 
	constructor(data){ 
		this.data = data; 
		this.next = None;
  }
}
class LinkedList{
  // Function to initialize head 
    constructor(){ 
        this.head = null;
    }
// Do not change anything above this line
    deleteNode(position){ 
        // YOU ONLY NEED TO COMPLETE THIS FUNCTION.
    }
  
  
    //Utility function to print the linked LinkedList 
    printList(){ 
        let temp = this.head; 
        while(temp){ 
            console.log(temp.data, end=" ");
            temp = temp.next;
        }
    }
}

// Do not change anything below this line
function convertToNumber(list){
  for(let value of list){
    value=parseInt(value);
  }
  return list;
}


  let n = parseInt(readLine());

    // Start with the empty list 
    let llist =new  LinkedList(); 

    temp = readLine().split(" ");
    convertToNumber(temp);
    if(n<1){
        llist.head = null;
    }
    else if(n<2){
        llist.head =new Node(temp[0]);
    }
    else{
        llist.head =new Node(temp[0]);
        let second =new Node(temp[1]);
        llist.head.next = second;
        let curr = llist.head.next;
    }


    for(let i=2;i<n;i++){
        let t =new Node(temp[i]);
        curr.next = t;
        curr = curr.next;
    }
    let pos = parseInt(readLine());
    llist.deleteNode(pos);
    llist.printList();




    function insertNodeAtPosition(llist, data, position) {
        // Write your code here
        if(!head||position ===0){
            head=new SinglyLinkedListNode(data,null)
            return head
           
           }
        let current = head;
        let i=1
        while(current){
            if(i===position){
                const node = new SinglyLinkedListNode(data, null) 
                node.next=current.next
                current.next=node
                return head
            }
            current=current.next;
            i++
        }
    
    }








    function deleteNode(head,position) {
        // Write your code here
        if(position ===0){
            return head.next          
           }
        let current = head;
        let i=1
        while(current){
            if(i===position){
               current.next=current.next ? current.next.next :current.next
            }
            current=current.next;
            i++
        }
    
    }