class SLL {
    constructor() {
        this.head = null;
    }

    // return true or false if this.head is null
    isEmpty() {
        return this.head == null
    }

    // add given node to the head, if it exists. return void
    addToFront(node) {
            let temp = this.head;
            if (node != null) {
                this.head = node;
                this.next = temp;
            }
        }
        // create a new node with given data, add it to the head. return void
    addDataToFront(data) {
        if (data != null) {
            var newNode = new Node(data);
            let temp = this.head;
            this.head = newNode;
            this.next = temp;
        }
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}