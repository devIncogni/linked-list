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
    while (currentNode !== null) {
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
    if (index >= this.size) {
      return;
    } else {
      let currentNode = this.head;
      let i = 0;
      while (i < index) {
        i += 1;
        currentNode = currentNode.next;
      }
      return currentNode;
    }
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
    for (let i = 0; i < this.size; i++) {
      if (String(this.at(i).value) === String(value)) {
        return true;
      }
    }
    return false;
  }

  find(value) {
    for (let i = 0; i < this.size; i++) {
      if (String(this.at(i).value) === String(value)) return i;
    }
    return null;
  }

  toString() {
    if (this.head === null) {
      return `null`;
    }

    let currentNode = this.head;
    let listString = ``;

    for (let i = 0; i < this.size; i++) {
      listString += `( ${currentNode.value} ) -> `;
      currentNode = currentNode.next;
    }
    return listString + ` null`;
  }

  insertAt(value, index) {
    if (index > this.size) {
      return;
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    if (index === this.size - 1) {
      this.append(value);
      return;
    }

    let prevNode = this.at(index - 1);
    let oldNode = prevNode.next;

    prevNode.next = new Node(value, oldNode);
  }

  removeAt(index) {
    if (index >= this.size) {
      return;
    }

    if (index == 0) {
      this.headNode = this.head.next;
      return;
    }

    let prevNode = this.at(index - 1);

    prevNode.next = index === this.size - 1 ? null : prevNode.next.next;
  }
}

export default LinkedList;
