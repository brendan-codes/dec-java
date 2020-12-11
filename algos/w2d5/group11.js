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
            this.length++;
        } else {
            node.prev = this.head;
            this.head.next = node;
            this.head = node;
        }
        return;
    }

    // pop from tail
    removeTail() {
        if (this.length == 0) {
            return;
        } else if (this.length == 1) {
            this.head = null;
            this.tail = null;
            this.length--;
        } else {
            var temp = this.tail;
            this.tail = this.tail.next;
            temp.next = null;
        }
        return;
    }



    // return is empty
    isEmpty() {
        if (this.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    // return length
    size() {
        return this.length;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) {

    }

    // pop from head
    removeHead() {

    }
}