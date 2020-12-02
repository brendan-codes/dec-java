class SLL {
    constructor() {
        this.head = null;
    }

    // console log (print) the data of every node in the current list
    read() {
        let reader = this.head;
        while (reader.next != null) {
            console.log(reader.data);
            reader = reader.next;
        }
        console.log(reader.data);
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        let content = this.head;
        while (content) {
            if (content.data == value) {
                return true;
            } else {
                content = content.next;
            }
        }
        return false;

    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        if(this.isEmpty())
        return false;
        
        let removed = this.head;
        this.head = this.head.next;
        removed.next = null;
        return removed;
    }

    isEmpty() {
        if (this.head === null) {
            return true;
        }
        return false;
    }

    addToFront(node) {
        node.next = this.head;
        this.head = node;
    }

    addDataToFront(data) {
        let node = new Node(data);
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

var myNewSLL = new SLL();
myNewSLL.addToFront(new Node(5));
myNewSLL.addToFront(new Node(22));
myNewSLL.addToFront(new Node(17));


var current = myNewSLL.head;

while (current) {
    console.log(current.data);
    current = current.next;

    if (current.next === null) {
        console.log("this is the last node");
    }
}