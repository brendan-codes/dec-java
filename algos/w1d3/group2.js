class SLL {
    constructor() {
        this.head = null;
    }

    // console log (print) the data of every node in the current list
    read() {
        var current = this.head;

        while (current) {
            console.log(current.data);
            current = current.next;

            if (current.next === null) {
                console.log("this is the last node");
            }
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        var current = this.head;
        while (current) {
            if (current.data == value) {
                console.log("value is in current list")
                return true;
            } else {
                if (current.next === null) {
                    console.log("value is not in list")
                    return false;
                }
            }
            current = current.next;
        }
    }
}

// Remove from front: remove and return the first node in the SLL
removeFromFront() {
    var current = this.head;
    if (current === null) {
        return;
    } else {
        if (current.next == null) {
            return;
        }
        first_car = current.next;
        if (first_car.next == null) {
            return;
        }
        second_car = first_car.next;
        this.head = second_car;
        first_car.next = null;
        return;
    }
}



isEmpty() {
    if (this.head === null) {
        return true;
    }
    return false;
}

addToFront(node) {
    node.next = this.head;
    this.head = node;
}

addDataToFront(data) {
    let node = new Node(data);
    node.next = this.head;
    this.head = node;
}
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var myNewSLL = new SLL();
myNewSLL.addToFront(5);
myNewSLL.addToFront(22);
myNewSLL.addToFront(17);


var current = myNewSLL.head;

while (current) {
    console.log(current.data);
    current = current.next;

    if (current.next === null) {
        console.log("this is the last node");
    }
}
while (current) {
    i
}(curr) rr == .loge.log() lele cu;
ullllconsoreturn fase false; = th;
() remo = retu((urrenurrent.