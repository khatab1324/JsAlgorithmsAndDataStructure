const express = require("express");
const app = express();
class Graphs {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(value) {
    if (!this.adjacencyList[value]) this.adjacencyList[value] = [];
  }
  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    } else {
      console.log("----------there is wrong with name of vertexies-------");
    }
  }
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      const newArray = this.adjacencyList[vertex1].filter(
        (item) => item !== vertex2
      );
      this.adjacencyList[vertex1] = newArray;
      const newArray2 = this.adjacencyList[vertex2].filter(
        (item) => item !== vertex1
      );
      this.adjacencyList[vertex2] = newArray2;
    } else {
      console.log("----------there is wrong with name of vertexies-------");
    }
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }
  // DFS -we will visit all vertex in the graph
  DFS(vertex) {
    if (!this.adjacencyList[vertex]) {
      console.log("this vertex is not exist");
      return;
    }
    const result = [];
    const visited = {};
    console.log(this.adjacencyList);
    const helper = (vertex) => {
      if (this.adjacencyList[vertex].length === 0) {
        console.log("sorry this vertex is emtdy");
        return;
      }
      result.push(vertex);
      visited[vertex] = true;
      for (let i = 0; i < this.adjacencyList[vertex].length - 1; i++) {
        const value = this.adjacencyList[vertex][i];
        if (!visited[value]) {
          helper(this.adjacencyList[vertex][i]);
        }
      }
    };
    helper(vertex);
    console.log(result);
    return result;
  }
  // colt code
  //   depthFirstRecursive(start){
  //     const result = [];
  //     const visited = {};
  //     const adjacencyList = this.adjacencyList;

  //     (function dfs(vertex){
  //         if(!vertex) return null;
  //         visited[vertex] = true;
  //         result.push(vertex);
  //         adjacencyList[vertex].forEach(neighbor => {
  //             if(!visited[neighbor]){
  //                 return dfs(neighbor)
  //             }
  //         });
  //     })(start);

  //     return result;
  // }
  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      currentVertex = stack.pop();
      result.push(currentVertex);

      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      });
    }
    return result;
  }

  BFS(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    let currentVertex;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((element) => {
        if (!visited[element]) {
          visited[element] = true;
          queue.push(element);
        }
      });
    }
    console.log(result);
    return result;
  }
}

const list = new Graphs();
list.addVertex("aatrox");
list.addVertex("irelea");
list.addVertex("panthion");
list.addVertex("terendmeir");
list.addVertex("teemo");

list.addEdge("aatrox", "irelea");
list.addEdge("aatrox", "panthion");
list.addEdge("aatrox", "terendmeir");
list.addEdge("irelea", "terendmeir");
list.addEdge("aatrox", "panthion");
// list.DFS("aatrox");
list.BFS("aatrox");
console.log(list);

const port = 3500;
app.listen(port, () => {
  console.log("we open in the port " + port);
});
