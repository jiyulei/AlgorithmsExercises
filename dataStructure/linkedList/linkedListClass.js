 class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
 class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
       const newNode = new Node(value);
       this.tail.next = newNode;
       this.tail = newNode;
       this.length++;
       return this;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index,value) {
        // const newNode = new Node(value);
        const newNode = {
            value: value,
            next: null,
        }

        if (index === 0) {
           return this.prepend(value);
    
        }
        if (index >= this.length) {
            return this.append(value);
        }
        
        const prevNode = this.traverseNode(index - 1);  
        const nextNodePlacement = prevNode.next;
    
        prevNode.next = newNode;
        newNode.next = nextNodePlacement;
        this.length++;
        return this;
    }

    // remove(index) {
    //     if (index === 0) {
    //         const nextNode = this.head.next;
    //         this.head = nextNode;
    //         return this;
    //     }
    //     if (index >= this.length) {
    //         return this;
    //     }

    //     const prevNode = this.traverseNode(index - 1);
    //     const currentNode = this.traverseNode(index);
    //     const nextNode = currentNode.next;

    //     prevNode.next = nextNode;
    //     currentNode.next = null;
    //     return this;
    // }

    remove(index) {
        if (index >= this.length) {
            return this;
        }

        const prev = this.traverseNode(index - 1);
        const current = prev.next;
        prev = current.next;
        length--;

    }

    traverseNode(index) {
        let count = 0;
        let currentNode = this.head;
        while (count !== index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }
    
    printList() {
        let currentNode = this.head;
        const arr = [];
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return arr;
    }

    reverse() {
        if (!this.head.next) {
            return this;
        }

        let current = this.head;
        this.tail = this.head;
        let nextNode = current.next;
        while(nextNode) {
            const temp = nextNode.next;
            nextNode.next = current;
            current = nextNode;
            nextNode = temp;
        }
        this.head.next = null;
        this.head = current;
    }
    count(n) {
        let first = this.head;
        let second = null;
        let count = -1;
        while (count < n ) {
            first = first.next;
            count++;
        }
        second = first;
        return second;
    }
}

module.exports.LinkedList = LinkedList;

let myList = new LinkedList(1);
myList.prepend(0);
myList.append(2);
myList.append(3);
myList.append(4);
// myList.reverse();
console.log(myList.count(2))
console.log(myList.printList());
// console.log(myList);




