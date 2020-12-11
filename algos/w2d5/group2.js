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
        if (this.isEmpty) {
            this.head = node;
            this.tail = node;
        } else {
            node.prev = this.head;
            this.head.next = node;
            this.head = node;
        }
    }

    // pop from tail
    removeTail() {
        if (this.isEmpty) {
            return null;
        } else if (this.head == this.tail || this.size == 1) {
            var removed = new this.tail.data;
            this.tail = null;
            this.head = null;
            return removed;
        } else {
            var curr = this.tail;
            var removed = new this.tail.data;
            this.tail = this.tail.next;
            curr.next = null;
            this.tail.prev = null
            return removed;
        }
    }


    // return is empty
    isEmpty() {
        if (this.head == null && this.tail == null) {
            return true;
        } else {
            return false;
        }
    }

    // return length
    size() {
        var curr = this.tail;
        var size = 0;
        while (cerr.next != null) {
            size++;
        }
        return size;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) {
        if (this.isEmpty) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.tail;
            this.tail.prev = node;
            this.tail = node;
        }
    }

    // pop from head
    removeHead() {
        if (this.isEmpty) {
            return null;
        } else if (this.head == this.tail || this.size == 1) {
            var removed = new this.head.data;
            this.tail = null;
            this.head = null;
            return removed;
        } else {
            var curr = this.head;
            var removed = new this.head.data;
            this.head = this.head.prev;
            curr.prev = null;
            this.head.next = null;
            return removed;
        }
    }
}