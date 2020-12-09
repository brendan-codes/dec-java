// Queue
// FIFO (First in, first out)


class Queue {
    constructor() {
        this.front = null; // "front of the line"
        this.rear = null; // "back of the line"
        this.length = 0;
    }

    // what if the queue is empty?
    // what if it's the last node in the queue?

    // add to the rear
    enqueue(node) {
        if (this.isEmpty()) {
            this.front = node;
            this.rear = node;
            this.length++;
        } else {
            this.rear.next = node;
            this.rear = node;
            this.length++;
        }
    }

    // remove from the front
    dequeue() {
        if (this.length == 1) {
            var temp = this.front;
            this.front = null;
            this.rear = null;
            this.length--;
            return temp;
        } else {
            var temp = this.front;
            this.front = this.front.next;
            temp.next = null;
            this.length--;
            return temp;
        }
    }

    // check the front of the queue
    checkFront() {
        return this.front;
    }

    // return if empty
    isEmpty() {
        if (this.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    // return length
    length() {
        return this.length;
    }
}

// print every value in the queue
// you may only use one queue or stack for additional storage
// return the queue back to it's original order when you are done
function readQueue(queue) {}


// Stacks

// A stack is a LIFO data structure
// LAST IN, FIRST OUT
// LIFO

// first in, first out

class arrStack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        if (this.items.length === 0) {
            return true;
        }
        return false;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class DLNode {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class slStack {
    constructor() {
        this.top = null; // this.head, this.end
        this.length = 0;
    }

    // add to top
    push(newNode) {
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    // remove from top
    pop() {
        if (this.top === null) return null;

        const removed = this.top;
        this.top = this.top.next;
        removed.next = null;
        this.length--;

        return removed;
    }

    // aka check top
    peek() {
        return this.head ? this.head.data : null;
    }

    // check if empty
    isEmpty() {
        return this.head === null;
    }

    length() {
        return this.length;
    }
}

// buh buh bonus challenge: countStack

// write the standalone function countStack
// given a slStack, count the nodes
// return the count
// you may use one stack or array as additional storage
// the given stack must be returned back to it's original order
// you may only use public stack methods push pop peek isempty
function countStack(stack) {
    let newStack = new slStack();
    let count = 0;

    while (!stack.isEmpty()) {
        let node = stack.pop();
        newStack.push(node);
        count++;
    }

    while (!newStack.isEmpty()) {
        stack.push(newStack.pop());
        h
    }

    return count;
};


var q1 = new Queue();
console.log(q1.isEmpty());
q1.enqueue(new Node(5));
console.log(q1.checkFront().data);
q1.enqueue(new Node(6));
q1.enqueue(new Node(7));
q1.enqueue(new Node(8));
q1.enqueue(new Node(9));
console.log(q1.dequeue().data);
console.log(q1.checkFront().data);
console.log("length is: " + q1.length);