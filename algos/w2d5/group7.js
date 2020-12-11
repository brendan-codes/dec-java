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
            this.length++
        } else {
            this.head.prev = node;
            this.head.prev.next = this.head;
            this.head = node;
            this.length++;
        }

    }

    // pop from tail
    removeTail() {
            if (this.head == null) {
                return undefined;
            } else if (this.length == 1) {
                this.length--;
                this.head = null;
                this.tail = null;
            } else {
                let temp = this.tail;
                this.tail = this.tail.prev
                this.tail.next = null;
                this.length--;
                return temp;
            }
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
        if (this.head == null) {
            return undefined;
        } else if (this.length == 1) {
            this.head = null;
            this.tail = null;
            this.length--;
        } else {
            let temp = this.tail;
            this.tail = node;
            this.tail.prev = temp;
            this.tail.next = null;
            this.length--;
            return temp;
        }

    }

    // pop from head
    removeHead() {
        if (this.length == 0) {
            return undefined
        } else if (this.length == 0) {
            this.head = null;
            this.tail = null;
            this.length--;
        } else {
            let temp = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            return temp;
        }
    }
}