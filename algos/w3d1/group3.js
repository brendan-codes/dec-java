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
            if (this.head == null) {
                return "empty list";
            }
            let runner = this.head;
            while (this.node != null) {
                if (runner.next != target) {
                    runner = this.next;
                } else {
                    let runner2 = runner.next;
                    runner.next = node;
                    node.prev = runner;
                    node.next = runner2;
                    runner2.prev = node;
                }
            }
            return DLList;
        }
        // prepend(target, node) {
        //     let temp;
        //     if (this.head.data != target) {
        //         temp = this.head.next;
        //         // console.log(temp.data)

    //     } else {
    //         temp = this.head;
    //         this.head = node;
    //         console.log(this.head.data)
    //         this.head.next = temp;
    //         temp.prev = this.head;
    //         console.log(temp.data)
    //     }
    //      if (temp.data == target) {
    //             // console.log(temp.data)
    //             node.next = temp;
    //             node.prev = temp.prev;
    //             temp.prev = node;
    //         }
    //     while (temp.data != target) {
    //         temp = temp.next;
    //         // console.log(temp.data)

    //         if (temp.data == target) {
    //             // console.log(temp.data)
    //             node.next = temp;
    //             node.prev = temp.prev;
    //             temp.prev = node;
    //         }
    //     }
    //     this.length++;
    // }
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