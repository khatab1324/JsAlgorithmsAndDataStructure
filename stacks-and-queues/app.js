//this just to save the data by using single link list or dll
const express = require("express");
const app = express();

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// here you just add in push way and remove what you add recently
// look stack have just two method push and pop jussttt
class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // like push
  enqueue(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = this.first;
    } else {
      let temp = this.first;
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }
  // dequeue like shift
  dequeue() {
    if (!this.first) return null;
    if (this.first === this.last) this.last = null;
    let temp = this.first;
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

let stack = new Stack();
stack.push(77);
stack.push(78);
// console.log(stack);
let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.dequeue());
console.log(queue);

const port = 3000;
app.listen(port, () => {
  console.log(`=========this port open in port ${port}==========`);
});
