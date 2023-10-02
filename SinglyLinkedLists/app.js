const express = require("express");
const app = express();

// node collect a piece of data -val
//reference to next node -next

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
// this masive way to write link list
// let first = new Node("what");
// first.next = new Node("is");
// first.next.next = new Node("your");
// first.next.next.next = new Node("name");
// console.log(first);

class SinglyLinkedLists {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let curreten = new Node(val);
    if (!this.head) {
      this.head = curreten;
      this.tail = this.head;
    } else {
      this.tail.next = curreten;
      this.tail = curreten;
    }
    this.length++;
    return this;
  }
  pop() {
    let curretn = this.head;
    let preVal = curretn;
    if (!this.tail) return undefined;

    while (curretn.next) {
      preVal = curretn;
      curretn = curretn.next;
    }
    this.tail = preVal;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return curretn;
  }
  shift() {
    if (!this.tail) return undefined;
    let curreten = this.head;
    this.head = this.head.next;
    this.length--;
    return curreten;
  }
  unshift(val) {
    let curreten = new Node(val);
    if (!this.head) {
      this.head = curreten;
      this.tail = this.head;
    } else {
      curreten.next = this.head;
      this.head = curreten;
    }
    this.length++;
    return curreten;
  }
  getByValue(val) {
    let curreten = this.head;
    while (curreten) {
      if (curreten.val === val) return curreten;

      curreten = curreten.next;
    }
  }
  getByIndex(index) {
    if (index < 0 || index >= this.length) return undefined;
    let curreten = this.head;
    for (let i = 0; i < index; i++) {
      curreten = curreten.next;
    }
    return curreten;
  }
  set(index, val) {
    var foundNode = this.getByIndex(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }
}
const list = new SinglyLinkedLists();
list.unshift("hello");
list.push("hello");
list.push("there");
list.push("I");
list.push("am");
list.pop();
list.shift();
list.unshift("hello");
list.getByValue("I");
list.getByIndex(2);
list.set(2, "attrox");

console.log(list);

const port = 3000;
app.listen(port, () => {
  console.log(`=========this port open in port ${port}==========`);
});
