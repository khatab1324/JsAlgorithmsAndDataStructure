const exprevss = require("express");
const app = exprevss();

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
class DoublyLinkedLists {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }
  pop() {
    if (!this.tail) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    // my solution
    const temp = this.tail;
    // this.tail = this.tail.prev;
    // this.tail.next = null;

    // the colt solution
    this.tail = temp.prev;
    this.tail.next = null;
    temp.prev = null;
    this.length--;
    return temp;
  }
  shift() {
    if (!this.head) return undefined;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // my code
      // this.head = this.head.next;
      // this.head.prev = null;
      // this.length--;

      // colt code
      const oldHead = this.head;
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
      this.length--;
      return oldHead;
    }
  }
  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
    return list;
  }
  getByIndix(index) {
    if (!this.head) return undefined;
    if (isNaN(index)) {
      console.log("we are soo sorry but you should enter a number");
      return false;
    }
    if (index > this.length || index < 0) {
      console.log(
        "sorry this number more then or less then length : " + this.length
      );
      return undefined;
    }
    if (index < Math.floor(this.length / 2)) {
      // we will debend on next if the index close form begaining
      let current = this.head;
      for (let i = 0; i < index; i++) current = current.next;
      console.log(current);
      return current;
    }
    if (index >= Math.floor(this.length / 2)) {
      // we are here start from end because the index close to the end
      let current = this.tail;
      for (let i = this.length; i > index; i--) current = current.prev;
      console.log(current);
      return current;
    } else {
      console.log("we sorry we don't find what you search for");
      return undefined;
    }
  }
  set(index, val) {
    if (!this.head) return undefined;
    if (this.getByIndix(index) == null) return false;

    let current = this.getByIndix(index);
    current.val = val;
    console.log(current);
    return true;
  }
  insert(index, val) {
    if (index > this.length || index < 0) {
      console.log(
        "sorry this number more then or less then length : " + this.length
      );
      return undefined;
    }
    if (index === 0) this.unshift(val);
    if (index === this.length) this.push();
    else {
      let newNode = new Node(val);
      let preValue = this.getByIndix(index - 1);
      newNode.next = preValue.next;
      newNode.prev = preValue;
      preValue.next = newNode;
      console.log(preValue);
      console.log("::::::::::::::::::::::::::::::::::");
      return true;
    }
  }
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    var removedNode = this.get(index);
    var beforeNode = removedNode.prev;
    var afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    // removedNode.prev.next = removedNode.next;
    // removedNode.next.prev = removedNode.prev;
    removedNode.next = null;
    removedNode.prev = null;
    this.length--;
    return removedNode;
  }
}
//  
const list = new DoublyLinkedLists();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push("fighters");
list.pop();
list.shift();
list.unshift(10);
// list.getByIndix(7);
// list.set(5, "feive");
// list.getByIndix(5);
list.insert(7, "saven");
console.log(list);

port = 3000;
app.listen(port, () => {
  console.log(`open in port : ${port} ^__-`);
});
