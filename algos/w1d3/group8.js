class SLL {
    constructor() {
        this.head = null;
    }

    // console log (print) the data of every node in the current list
    read() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            if (current.next == null) {
                console.log("Last node in list");
            }

            current = current.next;
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        let current = this.head;
        while (current) {
            console.log(current.data);
            if (current.data == value) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        if (this.head.next != null) {
            let temp = this.head;
            this.head = this.head.next;
            return temp;
        }

        return null;
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
myNewSLL.