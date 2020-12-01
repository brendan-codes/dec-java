class SLL {
    constructor() {
            this.head = null;
        }
        // return true or false if this.head is null
    isEmpty() {
        return (this.head == null);
        console.log(isEmpty);
    };

    // add given node to the head, if it exists. return void
    insertAtFront(data) {
        const newHead = new Node(data); // Create new instance of Node class w/data
        newHead.next = this.head; // Assign var's `.next` prop to be the NEW head of the SLL.
        this.head = newHead; // then set the head to the new node instance w/data in the node.
        return this; // Return the new SLL.
    };

    // create a  new node with given data, add it to the head. return void
    addDataToFront(data) {
        this.head = new node(data, this.head);
        console.log('addDataToFront' + data);
    }

}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var node = new Node(10);
var mySLL = new SLL();