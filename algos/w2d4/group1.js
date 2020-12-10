// using only one extra stack for storage, check if a given stack is sorted
// return the stack back to it's original order when you are done
// assume node.data are integers
function isStackSorted(stack) {
    let storageStack = new Stack();

    if (stack.length == 1) {
        return true;
    }

    if (stack.length == 0) {
        return null;
    }

    while (stack.length != 0) {
        let current = stack.pop();
        storageStack.push(current);
        let next = stack.peek()

        if (current.data > next.data) {
            break;
        }

        return true;
    }

    while (storageStack.length != 0) {
        let temp = storageStack.pop();
        stack.push(temp);
    }

    return false;
}


// bonus
// given two queues, return the one with the greater sum.
// return the queues to their original order
// assume node.data are integers
function greaterOfTwoQueues(queue1, queue2) {
    let storageQueue1 = new Queue();
    let storageQueue2 = new Queue();
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < queue1.length; i++) {
        let temp = queue1.dequeue();
        sum1 += temp.data;
        storageQueue1.enqueue(temp);
    }

    for (let j = 0; j < queue2.length; j++) {
        let temp = queue2.dequeue();
        sum2 += temp.data;
        storageQueue2.enqueue(temp);
    }

    while (storageQueue1.length != 0) {
        let temp = storageQueue1.dequeue();
        queue1.enqueue(temp);
    }

    while (storageQueue2.length != 0) {
        let temp = storageQueue2.dequeue();
        queue2.enqueue(temp);
    }

    if (sum1 > sum2) {
        return sum1;
    }

    if (sum2 > sum1) {
        return sum2;
    }
}



// queue: isPalindrome
// return true or false if the queue is a palindrome:
// a palindrome is a string or number that is equal to itself when reversed
function isPalindrome(queue) {
    var palindrome = true;
    var stack = new Stack(); // create a stack to hold data
    var len = queue.length(); // get a fixed length

    for (var i = 0; i < len; i++) {
        var node = queue.dequeue();
        stack.push(new Node(node.data)); // we must create new Nodes for the stack
        queue.enqueue(node);
    }

    for (var i = 0; i < len; i++) {
        var dequeued = queue.dequeue();
        var popped = stack.pop();

        if (popped.data !== dequeued.data) {
            palindrome = false; // even if we flip palindrome to false, keep going to fix the queue
        }

        queue.enqueue(dequeued);
    }

    return palindrome;
}

let myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(2);
myQueue.enqueue(1);

let myOtherQueue = new Queue();
myOtherQueue.enqueue(1);
myOtherQueue.enqueue(40);
myOtherQueue.enqueue(3);
myOtherQueue.enqueue(2);
myOtherQueue.enqueue(1);

console.log(isPalindrome(myQueue)); // true
console.log(isPalindrome(myOtherQueue)); // false

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.length = 0;
    }

    enqueue(node) {
        if (this.rear === null) {
            this.rear = node;
            this.front = node;
        } else {
            this.rear.next = node;
            this.rear = node;
        }
        this.length++;
    }

    dequeue() {
        if (this.front === null) {
            return null;
        };
        if (this.front === this.rear) {
            this.rear = null;
        };
        let node = this.front;
        this.front = node.next;
        node.next = null;
        this.length--;
        return node;
    }

    checkFront() {
        return this.front ? this.front.data : null;
    }

    isEmpty() {
        return this.front === null;
    }

    length() {
        return this.length;
    }
}

function readQueue(queue) {
    var tempQueue = new Queue();

    while (!queue.isEmpty()) {
        var tempNode = queue.dequeue();
        console.log(tempNode.data);
        tempQueue.enqueue(tempNode);
    }

    while (!tempQueue.isEmpty()) {
        queue.enqueue(tempQueue.dequeue());
    }

    return queue;
}


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
};.!
ifstoragestapeek