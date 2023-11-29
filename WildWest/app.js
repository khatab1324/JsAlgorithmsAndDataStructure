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
    if (!this.head) {
      this.head = NewNode;
      this.tail = NewNode;
    } else {
      this.tail.next = NewNode;
      this.tail = NewNode;
    }
    this.length++;
  }
  pop() {
    if (!this.head) return undefined;
    let currtenNode = this.head;
    while (currtenNode.next) {
      if (currtenNode.next === this.tail || currtenNode === this.tail) {
        let valuePop = this.tail;
        this.tail = currtenNode;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
          this.head = null;
          this.tail = null;
        }
        return valuePop;
      } else currtenNode = currtenNode.next;
    }
  }
  insert(index, value) {
    if (index <= 0 || index > this.length) return false;
    if (this.length === index) this.push(value);
    const newNode = new Node(value);
    let currentNode = this.head;
    for (let i = 0; i < index - 1; i++) currentNode = currentNode.next;
    newNode.next = currentNode.next;
    currentNode.next = newNode;
    this.length++;
    return true;
  }
  set(){
    
  }
}
let singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5);
singlyLinkedList.push(10);
singlyLinkedList.push(15);
singlyLinkedList.push(20);
console.log(singlyLinkedList.insert(4, 12));
// singlyLinkedList.insert(5,25)
console.log(singlyLinkedList);
console.log(singlyLinkedList.pop().val);

const port = 3500;
app.listen(port, () => {
  console.log("we open on port " + port);
});
