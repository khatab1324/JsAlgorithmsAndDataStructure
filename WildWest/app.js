const express = require("express");
const app = express();

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(number) {
    // YOUR CODE GOES HERE
    const NewNode = new Node(number);
    if (this.length === 0) {
      this.head = NewNode;
      this.tail = NewNode;
    } else {
      this.tail.next = NewNode;
      this.tail = NewNode;
    }
    this.length++;
  }
}
let singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5);
singlyLinkedList.push(10);

console.log(singlyLinkedList);

const port = 3500;
app.listen(port, () => {
  console.log("we open on port " + port);
});
