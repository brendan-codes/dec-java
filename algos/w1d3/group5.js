class SLL {
    constructor() {
        this.head = null;
    }

    // console log (print) the data of every node in the current list
    read(current) {
        while (current) {
            console.log(current.data);

            if (current.next === null) {
                console.log("this is the last node");
            }
            current = current.next;
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        var current = this.head;
        while (current != null) {
            if (current.data === value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        this.head = this.head.next;
        return this.head;
    }

    isEmpty() {
        return this.head === null
    }

    addToFront(node) {
        let temp = this.head;
        if (node != null) {
            this.head = node;
            this.next = temp;
        }
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
myNewSLL.addDataToFront(5);
myNewSLL.addDataToFront(22);
myNewSLL.addDataToFront(17);


myNewSLL.read(myNewSLL.head);
console.log(myNewSLL.contains(22));
myNewSLL.removeFromFront();
myNewSLL.read(myNewSLL.head);