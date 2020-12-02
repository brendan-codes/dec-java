class SLL {
    constructor() {
        this.head = null;
    }

    // console log (print) the data of every node in the current list
    read() {
        var runner = this.head;
        while (runner.next != null) {
            console.log(runner.data);
            runner = runner.next;
        }
        console.log(runner.data);
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        var runner = this.head;
        while (runner) {
            if (runner.data == value) {
                return true;
            } else {
                runner = runner.next;
            }
        }
        return false;

    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {}

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


// var current = myNewSLL.head;

// while (current) {
//     console.log(current.data);
//     current = current.next;

//     if (current.next === null) {
//         console.log("this is the last node");
//     }
// }

myNewSLL.read();