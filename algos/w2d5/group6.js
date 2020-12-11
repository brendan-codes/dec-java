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

    // push to head
    addHead(node) {
        if (this.length == 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.head;
            this.head.next = node;
            this.head = node;
        }
        this.length++;
    }

    // pop from tail
    removeTail() {
        let node = this.tail;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.next;
            this.tail.prev = null;
        }
        node.prev = null;
        node.next = null;
        this.length--;
        return node;
    }


    // return is empty
    isEmpty() {
        if (this.length == 0) {
            return true;
        }
        return false;
    }

    // return length
    size() {
        return this.length;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) {
        if (this.length == 0) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.tail;
            this.tail.prev = node;
            this.tail = node;
        }
        this.length++;
    }

    // pop from head
    removeHead() {
        let node = this.head;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.prev;
            this.head.next = null;
        }
        node.prev = null;
        node.next = null;
        this.length--;
        return node;
    }
}