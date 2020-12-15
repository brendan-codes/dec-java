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

    // add node before target if target exists
    // target is a node data
    prepend(target, node) {
        let runner = this.head;
        while (runner != null) {
            if (runner.data == target) {
                node.prev = runner.prev;
                node.next = runner;
                runner.prev.next = node;
                runner.prev = node;
                this.length++;
                break;
            }
            runner = runner.next;
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
    addTail(node) {
        if (!this.tail) {
            this.tail = node;
            this.head = node;
        } else {
            this.tail.prev = this.tail;
            node.next = null;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
    }

    // add after target if exists
    append(target, node) {
        let current = this.tail;
        let next = null;

        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.length++;
        }


        while (current.prev != null) {
            if (current.data == target) {
                current.next = node;
                next.prev = node;
                node.prev = current;
                node.next = next;
                this.length++;
            } else {
                next = current;
                current = current.prev;
            }
        }
    }

    // pop from head
    removeHead() {
        if (this.head | this.length == 1) {
            return null
        }
        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
    }
}