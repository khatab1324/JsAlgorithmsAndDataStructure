const express = require("express");
const app = express();

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return false;
    } else {
      let tempNode = this.root;
      while (true) {
        if (newNode.value > tempNode.value) {
          if (!tempNode.right) {
            tempNode.right = newNode;
            return this;
          }
          tempNode = tempNode.right;
        }
        if (newNode.value < tempNode.value) {
          if (!tempNode.left) {
            tempNode.left = newNode;
            return this;
          }
          tempNode = tempNode.left;
        }
      }
    }
  }
  find(value) {
    let currentNode = this.root;
    while (true) {
      if (!this.root) {
        console.log(
          "sorry but you should have root (you should insert something)"
        );
        return this;
      }
      if (currentNode.value === value) {
        console.log("we found this value in ");
        console.log(currentNode);
        return this;
      }
      if (value < currentNode.value) {
        if (currentNode.left) currentNode = currentNode.left;
      }
      if (value > currentNode.value) {
        if (currentNode.right) currentNode = currentNode.right;
      } else {
        console.log("sorry but we don't find this value");
        return this;
      }
    }
  }
  // colt solve
  // find(value){
  //   if(this.root === null) return false;
  //   var current = this.root,
  //       found = false;
  //   while(current && !found){
  //       if(value < current.value){
  //           current = current.left;
  //       } else if(value > current.value){
  //           current = current.right;
  //       } else {
  //           found = true;
  //       }
  //   }
  //   if(!found) return undefined;
  // return current;
  // }
}
let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.left = new Node(9);
tree.insert(12);
tree.insert(13);
tree.insert(8);
tree.find(13);
console.log(tree);

const port = 3000;
app.listen(port, () => {
  console.log(`=========this port open in port ${port}==========`);
});
