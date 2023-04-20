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


// JS program to delete M nodes after N nodes 
  
// Node class  
class Node{
    //Constructor to initialize the node object 
    constructor(data){
        this.data = data; 
        this.next = null;
    }
}
class LinkedList{ 
    // Function to initialize head 
    constructor(){ 
        this.head = null;
    }
    // Function to insert a new node at the beginning 
    push(newData){ 
        newDode = Node(newData); 
        newNode.next = this.head; 
        this.head = newNode; 
    }
    // Utility function to prit the linked LinkedList 
    printList(){ 
        let temp = this.head; 
        while(temp){ 
            console.log (temp.data+ ' '); 
            temp = temp.next
        }
    }
    skipMdeleteN(self, M, N){
        // Implment This 
    }
          
}

// Driver program to test above function 
  

let n = parseInt(readLine());
let input = readLine().split(" ");
let M = parseInt(input[0]);
let N = parseInt(input[1]);
let llist = LinkedList(); 
let ar=readLine().split(" ");
l = convertToNumber(ar);
l.reverse();
for(i of l){
    llist.push(i);
}
llist.skipMdeleteN(M, N) ; 
llist.printList();