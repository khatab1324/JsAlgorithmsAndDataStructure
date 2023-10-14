const express = require("express");
const app = express();

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
//bfs =>Breadth First Search =>this for search in every node
class NotOrderTree {
  constructor() {
    this.root = null;
  }
  //   this insert for binary search tree , this make our tree ordered but imagen it not order
  // image the tree is not order
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
  BFS() {
    if (!this.root) return undefined;
    let data = [],
      queue = [],
      node = this.root;
    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
    }
    console.log(data);
    return data;
  }

  DFS_preOrder() {
    let data = [],
      current = this.root;
    function helper(current) {
      data.push(current.value);
      if (current.left) helper(current.left);
      if (current.right) helper(current.right);
    }
    helper(current);
    console.log(data);
    return data;
  }
  //   just push after arrive to the last one
  DFS_postOrder() {
    let data = [],
      current = this.root;
    function helper(current) {
      if (current.left) helper(current.left);
      if (current.right) helper(current.right);
      data.push(current.value);
    }
    helper(current);
    console.log(data);
    return data;
  }
  DFS_inOrder() {
    let data = [],
      current = this.root;
    function helper(current) {
      if (current.left) helper(current.left);
      data.push(current.value);
      if (current.right) helper(current.right);
    }
    helper(current);
    console.log(data);
    return data;
  }
}

let tree = new NotOrderTree();
tree.root = new Node(10);
tree.insert(12);
tree.insert(15);
tree.insert(14);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.BFS();
tree.DFS_preOrder();
tree.DFS_postOrder();
console.log(tree);

const port = 3500;
app.listen(port, () => {
  console.log("we open on port " + port);
});
