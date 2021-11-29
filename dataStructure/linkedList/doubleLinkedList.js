class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class doubleLinkedList {
  constructor(headValue) {
    this.head = new Node(headValue);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, value) {
    const newNode = new Node(value);
    const currentNode = this.traverseNode(index);
    const prevNode = currentNode.prev;

    currentNode.prev = newNode;
    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = currentNode;

    this.length++;

    return this;
  }

  remove(index) {
    const nodeToRemove = this.traverseNode(index);

    if (nodeToRemove.prev === null) {
        if (this.length === 1) {
            return null;
        }

        this.head = this.head.next;
        this.head.next.prev = null;
        this.length--;
        return;
    }

    if (nodeToRemove.next === null) {
        this.tail = nodeToRemove.prev;
        nodeToRemove.prev.next = null;
        this.length--;
        return;
    }

    nodeToRemove.prev.next = nodeToRemove.next;
    nodeToRemove.next.prev = nodeToRemove.prev;
    this.length--;

    return this;
  }

  printList() {
    let currentNode = this.head;
    const arr = [];

    while (currentNode !== null) {
      const value = currentNode.value;
      arr.push(value);
      currentNode = currentNode.next;
    }

    return arr;
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
}

const list1 = new doubleLinkedList(1);
list1.prepend(0);
list1.append(2);
// list1.insert(1, 2);
list1.remove(2);
console.log(list1.printList());
console.log(list1);
