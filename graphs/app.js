const express = require("express");
const app = express();
// https://cs.slides.com/colt_steele/graphs#/31/0/1

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
  removeVertex(value) {
    this.adjacencyList[value].map((vertex) => {
      const newArray = this.adjacencyList[vertex].filter(
        (item) => item !== value
      );
      this.adjacencyList[vertex] = newArray;
    });
    delete this.adjacencyList[value];
  }
  // colt code
  //   removeVertex(vertex){
  //     while(this.adjacencyList[vertex].length){
  //         const adjacentVertex = this.adjacencyList[vertex].pop();
  //         this.removeEdge(vertex, adjacentVertex);
  //     }
  //     delete this.adjacencyList[vertex]
  // }
}
const list = new Graphs();
list.addVertex("aatrox");
list.addVertex("irelea");
list.addVertex("panthion");
list.addVertex("terendmeir");
list.addEdge("aatrox", "irelea");
list.addEdge("aatrox", "panthion");
list.addEdge("aatrox", "terendmeir");
list.addEdge("irelea", "terendmeir");
list.addEdge("aatrox", "panthion");
list.removeEdge("aatrox", "panthion");
list.removeVertex("terendmeir");
console.log(list);

const port = 3500;
app.listen(port, () => {
  console.log("we open in the port " + port);
});
