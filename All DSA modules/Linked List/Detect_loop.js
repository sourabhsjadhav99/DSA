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




//  JS program to detect loop in the linked list 

// Node class 
class Node{ 
    // Constructor to initialize the node object 
    constructor(data){ 
 		this.data = data; 
 		this.next = null;
    }
}
class LinkedList{
// # Function to initialize head 
     constructor(){ 
         self.head = null;
     }
//  Do not change anything above this line

     detectLoop(self){
//         # YOU ONLY NEED TO COMPLETE THIS FUNCTION.
//         # RETURN 1 IF LOOP IS THERE IN THE LINKED LIST, ELSE RETURN 0
}
}

//  Do not change anything below this line
    
let n = parseInt(readLine());

// Start with the empty list 
let llist = LinkedList() ;
let ar = readLine().split(" ");
let temp=ConvertToIntegers(ar);
if(n<1){
    llist.head = null;
}
else if(n<2){
    llist.head = Node(temp[0]);
}
else{
    llist.head = Node(temp[0]);
    let second = Node(temp[1]);
    llist.head.next = second;
    var curr = llist.head.next;
}

for(let i=2;i<n;i++){
    let t = Node(temp[i]);
    curr.next = t;
    curr = curr.next;
}
letlink = parseInt(readLine());
if(link!=-1){
        let t = llist.head;
         for(let i=0;i<link-1;i++){
            t = t.next;
         }
         curr.next = t;
}
//     # llist.printList()
console.log(llist.detectLoop());