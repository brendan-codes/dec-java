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

    // remove and return the first node with data === val, if it exists
    removeVal(val) {
        // what if the value is not in the list?
        if (this.isEmpty()) {
            return null;
        }
        // what if the value is the head and tail?
        if (this.length == 1 && this.head.data === val) {
            node = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return node;
        }
        // what if the value is the head?
        if (this.head.data === val && this.length > 1) {
            node = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            node.next = null;
            this.length--;
            return node;
        }
        // what if the value is the tail?
        if (this.tail.data === val && this.length > 1) {
            node = this.tail;
            this.tail = this.tail.prev;
            this.tail.prev = null;
            node.prev = null;
            this.length--;
            return node;
        }
        // what if the value is in the middle of the list?
        runner = this.head;
        while (runner != null) {
            if (runner.data === val) {
                node = runner;
                node.next.prev = node.prev;
                node.prev.next = node.next;
                node.next = null;
                node.prev = null;
                return node;
            }
            runner = runner.next;
        }
        return node;
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

    // 1 == "1" true
    // 1 === "1" false

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