class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.headNode = null;
    this.tailNode = null;
  }

  prepend(value) {
    this.headNode = new Node(value, this.headNode);
    if (this.tailNode === null) {
      this.tailNode = this.headNode;
    }
  }

  append(value) {
    if (this.headNode === null) {
      this.tailNode = new Node(value);
      this.headNode = this.tailNode;
    } else {
      this.tailNode.next = new Node(value);
      this.tailNode = this.tailNode.next;
    }
  }

  size() {
    let size = 0;
    let currentNode = this.headNode;
    while (currentNode.next !== null) {
      size += 1;
      currentNode = currentNode.next;
    }
    return size;
  }
}
