// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // == Main Methods ==

    // return true or false if value exists
    exists(value) {
        var runner = this.head;
        while (runner || runner.data != value) {
            runner = runner.next;
        }
        if (runner) {
            return true;
        } else {
            return false;
        }
    }

    // reverse a doubly linked list
    reverse() {
        if (this.isEmpty) {
            return null;
        }
        var runner = this.head;
        this.head = this.tail;
        this.tail = runner
        while (runner) {
            var temp = runner.prev;
            runner.prev = runner.next;
            runner.next = temp;
            runner = runner.prev;
        }
    }

    // return true of false if the current DLL is a palindrome
    checkPalindrome() {
        var runner1 = this.head;
        var runner2 = this.tail;
        for (var i = 1; i <= this.length / 2; i++) {
            if (runner1.data == runner2.data) {
                runner1 = runner1.next;
                runner2 = runner2.prev;
            } else {
                return false;
            }
        }
        return true;
    }

    // remove and return the first node with data === val, if it exists
    removeVal(val) {
        var runner = this.head;

        if (!runner) {
            return runner;
        }

        // remove head and tail
        if (runner === this.tail && runner.data === val) {
            this.head = null;
            this.tail = null;
            this.length--;
            return runner;
        }

        // remove just head
        if (runner.data === val) {
            this.head = runner.next;
            this.head.prev = null;
            runner.next = null;
            this.length--;
            return runner;
        }

        while (runner) {
            // remove runner
            if (runner.data === val) {
                // remove runner at tail
                if (runner === this.tail) {

                    // return this.removeTail();
                    this.tail = runner.prev;
                    runner.prev.next = null;
                    runner.prev = null;
                    length--;
                    return runner;
                }
                runner.prev.next = runner.next;
                runner.next.prev = runner.prev;
                runner.next = null;
                runner.prev = null;
                this.length--;
                return runner;
            }
            runner = runner.next;
        }

        // return null
    }

    // add node before target if target exists
    // target is a node data
    prependClean(target, node) {
        var runner = this.head;
        while (runner) {
            if (runner.data === target) {
                node.next = runner;
                node.prev = runner.prev;
                runner.prev.next = node;
                runner.prev = node;
                this.length++;
                if (runner === this.head) {
                    this.head = node;
                }
                return;
            } else {
                runner = runner.next;
            }
        }
    }

    prepend(target, node) {
        if (this.head !== null) { // Must have at least one node
            var curNode = this.head;
            if (curNode.data === target) { // Edge case: first node only
                node.next = curNode; // Connect nodes
                curNode.prev = node;
                this.head = node; // Move this.head to new node
                this.length++;
            } else {
                while (curNode.next !== null) {
                    curNode = curNode.next; // Move to next node
                    if (curNode.data === target) {
                        // Link this new node to the others
                        node.next = curNode;
                        node.prev = curNode.prev;
                        // Link other nodes to this new node
                        curNode.prev.next = node;
                        curNode.prev = node;
                        this.length++;
                        break; // Exit while loop assuming only before first instance of target
                    }
                }
            }
        }
    }

    // push to head
    addHead(node) {
        if (!this.head) { // empty list
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    // pop from tail
    removeTail() {
        if (this.head == null) return; // empty list
        if (this.head === this.tail) { // one node
            var temp = this.tail;
            this.head = null;
            this.tail = null;
            this.length--;
            return temp;
        }
        var temp = this.tail;
        this.tail = temp.prev;
        this.tail.next = null;
        temp.prev = null;
        this.length--;
        return temp;
    }

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    // return length
    size() {
        return this.length;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) {}

    // add after target if exists
    append(target, node) {}

    // pop from head
    removeHead() {}
}