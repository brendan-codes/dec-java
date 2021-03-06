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
        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.length++;
        }

        let currentNode = this.head;
        let previousNode = null;

        while (currentNode.next != null) {
            if (currentNode.data == target) {
                currentNode.prev = node;
                previousNode.next = node;
                node.next = currentNode;
                node.prev = previousNode;
                this.length++;
            } else {
                previousNode = currentNode;
                currentNode = currentNode.next;
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
    addTail(node) {
        if (!this.head) { // empty list
            this.head = node;
            this.tail = node;
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
        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.length++;
        }

        let currentNode = this.tail;
        let nextNode = null;

        while (currentNode.prev != null) {
            if (currentNode.data == target) {
                currentNode.next = node;
                nextNode.prev = node;
                node.prev = currentNode;
                node.next = nextNode;
                this.length++;
            } else {
                nextNode = currentNode;
                currentNode = currentNode.prev;
            }
        }
    }


    // pop from head
    removeHead() {
        if (!this.head | this.length == 1) {
            return null;
        }

        this.head = this.head.next;
        this.head.prev = null;
        this.length--;
    }
}