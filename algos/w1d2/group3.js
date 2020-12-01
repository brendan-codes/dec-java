class SLL {
    constructor() {
        this.head = null;
    }

    // return true or false if this.head is null
    isEmpty() {
        if (this.head == null) {
            return true;
        } else {
            return false;
        }
    }

    // add given node to the head, if it exists. return void
    addToFront(node) {
        if (this.head) {
            return void;
        } else {
            this.head = node;
        }
    }

    // createa  new node with given data, add it to the head. return void
    addDataToFront(data) {
        node.next = this.head;
        this.head = node;
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
( * ).h


mySLL.isEmpty() v