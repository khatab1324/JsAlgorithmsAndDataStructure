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
}
let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.left=new Node(9);
tree.root.left.right=new Node(11)
console.log(tree);

const port = 3000;
app.listen(port, () => {
  console.log(`=========this port open in port ${port}==========`);
});
