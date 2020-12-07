// Stacks

// A stack is a LIFO data structure
// LAST IN, FIRST OUT
// LIFO

// push - add to top
// pop - remove from top
// peek - check the top
// isEmpty - check if the stack is empty, true/false
// length - return size of stack

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

    length(){
        return this.items.length;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class slStack {
    constructor() {
        this.top = null; // this.head, this.end
        this.length = 0;
    }

    // add to top
    push(newNode) {
        if (this.isEmpty()) {
            this.top = newNode;
            this.length = 1;
        } else {
            temp = this.top;
            this.top = newNode;
            this.top.next = temp;
            this.length++;
        }
    }

    // remove from top
    pop() {
        if (!this.isEmpty()) {
            nodeRemoved = this.top;
            this.top = this.top.next;
            this.length--;
            return nodeRemoved;
        } else {
            return null;
        }
    }

    // aka check top
    peek() {
        if (!this.isEmpty()) {
            return this.head.data;
        } else {
            return null;
        }
    }

    // check if empty
    isEmpty() {
        return this.head === null;
    }

    // length getter
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
    let count = 0;
    if (!stack.isEmpty()) {
        let currentNode = this.top;
        count = 1;
        while (currentNode.next != null) {
            currentNode = currentNode.next;
            count++;
        }
    } else {
        return null;
    }

    return count;

};

