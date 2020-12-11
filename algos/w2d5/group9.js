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
            this.head = node;
            this.tail = node
        } else {
            this.head.next = node;
            node.prev = this.head;
            this.head = node;
        }
        this.length++;
    }

    // pop from tail
    removeTail() {
        var popnode = this.tail;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
            this.length--;
        } else if (this.length > 1) {
            this.tail = this.tail.next;
            popnode.next = null;
            this.tail.prev = null;
            this.length--;
        }

        return popnode;
    }


    // return is empty
    isEmpty() {
        if (this.length == 0) {
            return true
        }
        return false
    }

    // return length
    size() {
        return this.length
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) {
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.prev = node;
            node.next = this.tail;
            this.tail = node;
        }
        this.length++;
    }

    // pop from head
    removeHead() {
        var popnode = this.head;
        if (this.length == 1) {
            this.head = null;
            this.tail = null;
            this.length--;
        } else if (this.length > 1) {
            this.head = this.head.prev;
            popnode.prev = null;
            this.head.next = null;
            this.length--;
        }

        return popnode;
    }

    printAllData() {
        var runner = this.head;
        while (runner) {
            console.log(runner.data);
            runner = runner.next;
        }
    }
}

var Node = new DLLNode(3);
var Node2 = new DLLNode(4);
var Node3 = new DLLNode(0);

var testlist = new DLList();
testlist.addHead(Node);
testlist.addTail(Node2);
testlist.isEmpty();
testlist.size();
console.log(testlist.removeHead().data);
console.log(testlist.removeTail().data);
testlist.addHead(Node3);
testlist.printAllData();