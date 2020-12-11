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
        if (this.isEmpty()) {
            this.tail = node;
            this.head = node;
        } else {
            node.prev = this.head;
            this.head.next = node;
            this.head = node;
        }
        this.length++;

    }

    // pop from tail
    removeTail() {
        let removed = this.tail;
        if (this.isEmpty()) {
            return null;
        } else if (this.size() == 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.next;
            this.tail.prev = null;
        }
        removed.next = null;
        this.length--;
        return removed;
    }


    // return is empty
    isEmpty() {
        return this.head == null;
    }

    // return length
    size() {
        return this.length;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) {
        if (this.isEmpty()) {
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
        let removed = this.head;
        if (this.isEmpty()) {
            return null
        } else if (this.size() == 1) {
            this.tail = null;
            this.head = null;
        } else {
            this.head = this.head.prev;
            this.head.next = null;
        }
        removed.prev = null;
        this.length--;
        return removed
    }
}