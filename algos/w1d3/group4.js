class SLL {
    constructor() {
        this.head = null;
    }

    // console log (print) the data of every node in the current list

    read() {
        while (current.data != null) {
            console.log(current.data);
            current = current.next;
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        for (var i = 0; i < current.length; i++) {
            if (current[i].data == value) {
                return true;
            }
        }
        return false;
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        current.next == current.next.next;
        return current.next
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
myNewSLL.addToFront(new Nodeda(5));
myNewSLL.addToFront(22);
myNewSLL.addToFront(17);


var current = myNewSLL.head;

while (current) {
    console.log(current.data);
    current = current.next;

    if (current.next === null) {
        console.log("this is the last node");
    }
}