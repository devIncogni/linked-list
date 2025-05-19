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

  get size() {
    let size = 0;
    let currentNode = this.head;
    while (currentNode.next !== null) {
      size += 1;
      currentNode = currentNode.next;
    }
    return size;
  }

  get head() {
    return this.headNode;
  }

  get tail() {
    return this.tailNode;
  }

  at(index) {
    let currentNode = this.head;
    if (index > this.size) {
      return null;
    }
    for (let i = 0; i <= index; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  pop() {
    let listSize = this.size;
    if (listSize < 1) {
      return;
    }
    this.at(listSize - 1).next = null;
    this.tailNode = this.at(listSize - 1);
  }

  contains(value) {
    for (let i = 0; i <= this.size; i++) {
      if (String(this.at(i).value) === String(value)) {
        return true;
      }
    }
    return false;
  }

  find(value) {
    for (let i = 0; i <= this.size; i++) {
      if (String(this.at(i).value) === String(value)) return i;
      return null;
    }
  }

  toString() {
    if (this.head === null) {
      return `null`;
    }

    let currentNode = this.head;
    let listString = ``;

    for (let i = 0; i <= this.size; i++) {
      listString += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }
  }

  insertAt(value, index) {
    if (index > this.size) {
      this.append(value);
      return;
    }

    let prevNode = this.at(index - 1);
    let oldNode = prevNode.next;

    prevNode.next = new Node(value, oldNode);
  }

  removeAt(index) {
    let prevNode = this.at(index);
    prevNode.next = prevNode.next.next;
  }
}

export default LinkedList;
