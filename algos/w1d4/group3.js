class SLL {
    countNodes = 0;

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
        //check if node is empty
        if (this.isEmpty()) {
            console.log("list is empty- nothing to delete");
            //check for val in head node
        } else if (val == this.head.data) {
            this.head = this.head.next;
            console.log(val + " removed the head node");
            this.countNodes--;
            //check for val in each node by transversing through the sll
        } else {
            var runner = this.head;
            while (runner.next != null) {
                if (runner.next.data == val) {
                    console.log(val + " was removed from list");
                    runner.next = runner.next.next;
                    this.countNodes--;
                    return;
                } else {
                    runner = runner.next;
                }
            }
            console.log("did not find " + val + " in list");
        }
    }

    // Return the total amount of nodes in the list
    size() {
        console.log("there are/is currently " + this.countNodes + " node(s) in the SLL");
        return this.countNodes;
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
            if (runner.next.data === value) {
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
        this.countNodes--;
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
        this.countNodes++;
    }

    addDataToFront(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
        countNodes++;
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

myNewSLL.size();
myNewSLL.delete(6);
myNewSLL.delete(22);
myNewSLL.delete(17);
myNewSLL.read();
myNewSLL.size();