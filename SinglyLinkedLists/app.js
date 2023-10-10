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
  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) {
      this.push(val);
      return true;
      // or you can do this return !!this.push(val) ==>this like this !"hi" -> false !!"hi" ->true
    }
    if (index === 0) {
      this.unshift(val);
      return true;
    } else {
      let newVal = new Node(val);
      let preVal = this.getByIndex(index - 1);
      newVal.next = preVal.next;
      preVal.next = newVal;

      // colt code
      //    var newNode = new Node(val);
      // var prev = this.get(index - 1);
      // var temp = prev.next;
      // prev.next = newNode;
      // newNode.next = temp;
      this.length++;
    }

    return true;
  }
  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.unshift; //this will returen boole
    if (index === this.length) {
      return !!this.pop;
    } else {
      let preVal = this.getByIndex(index - 1);
      let curreten = this.getByIndex(index);
      preVal.next = curreten.next;
      this.length--;
      return true;
    }
    // colt way
    // if(index < 0 || index >= this.length) return undefined;
    // if(index === 0) return this.shift();
    // if(index === this.length - 1) return this.pop();
    // var previousNode = this.get(index - 1);
    // var removed = previousNode.next;
    // previousNode.next = removed.next;
    // this.length--;
    // return removed;
  }
  reverse() {
    let index = this.length - 1;
    let preIndex = index - 1;
    let curreten;
    let preValue;
    // the time comlexty is O(n^2)
    for (let i = 1; i < this.length; i++) {
      curreten = this.getByIndex(index);
      preValue = this.getByIndex(preIndex);
      curreten.next = preValue;
      preValue.next = null;
      index--;
      preIndex--;
    }
    this.head = this.tail;
    this.tail = preValue;
    // colt way
    //  var node = this.head;
    // this.head = this.tail;
    // this.tail = node;
    // var next;
    // var prev = null;
    // for(var i = 0; i < this.length; i++){
    //   next = node.next;
    //   node.next = prev;
    //   prev = node;
    //   node = next;
    // }
    // return this;
  }
  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
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
list.insert(2, "varos");
list.insert(5, "hi");
list.remove(1);
list.print();
list.reverse();
list.print();
// console.log(list.getByIndex(4));
console.log(list);

const port = 3000;
app.listen(port, () => {
  console.log(`=========this port open in port ${port}==========`);
});

