class SLL {
    constructor() {
        this.head = null;
    }

    // return true or false if this.head is null
    isEmpty() {}

    // add given node to the head, if it exists. return void
    addToFront(node) {}

    // createa  new node with given data, add it to the head. return void
    addDataToFront(data) {}
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var node = new Node(10);
var mySLL = new SLL();
