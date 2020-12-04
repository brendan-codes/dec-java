class SLL {
    constructor() {
        this.head = null;
    }

    // if val is contained within the current list, delete it.
    // return void
    // assume there are no duplicates
    // consider the edge case if you have to delete the head node
    // consider the edge case your list is empty
    // consider the edge case that your list does not contain the val
    delete(val) {
            var current = this.head;
            if (this.isEmpty()) {
                console.log("The SLL is empty")
            } else if (!this.contains(val)) {
                console.log("The SLL does not contain this value");
            } else if (current.data == val) {
                this.removeFromFront();
            } else {
                while (current.next.data != val) {
                    current = current.next;
                }
                current.next = current.next.next;
            }
        }
        // Return the total amount of nodes in the list
    size() {
        var count = 0;
        var current = this.head;
        if (this.isEmpty()) {
            return count;
        } else {
            count = 1;
            while (current.next != null) {
                current = current.next;
                count += 1;
            }
        }

        return count;
    }

    read() {
        var current = this.head; // set curret as the head, if it exists or not
        while (current) { // if current, log and move to current.next
            console.log(current.data);
            current = current.next;
        }
    }

    contains(value) {
        // start at the head
        var runner = this.head;

        // while we have a runner
        while (runner) {

            // return true if data === value
            if (runner.data === value) {
                return true;
            }
            // otherwise advance the runner
            runner = runner.next;
        }

        // if the while loop completes, return false
        return false;
    }

    removeFromFront() {
        if (this.isEmpty()) return null; // nothing to remove

        var removed = this.head; // save the head in a temp variable
        this.head = this.head.next; // move the head
        removed.next = null; // make removed no longer reference the list
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
var emptySLL = new SLL();
myNewSLL.addToFront(new Node(5));
myNewSLL.addToFront(new Node(22));
myNewSLL.addToFront(new Node(17));
myNewSLL.addToFront(new Node(25))


var current = myNewSLL.head;
console.log(myNewSLL.isEmpty());
console.log(myNewSLL.size());
myNewSLL.delete(50);
myNewSLL.read();
emptySLL.delete(2);