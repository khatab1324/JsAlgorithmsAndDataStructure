const express = require("express");
const app = express();
class MaxBinaryHeaps {
  constructor() {
    this.value = [];
  }
  insert(value) {
    if (this.value.length === 0) {
      this.value.push(value);
    } else {
      this.value.push(value);
      let chiledIndex = this.value.length - 1;
      while (true) {
        // problem with time complexty with this code because indexOf
        // let chiledIndex = this.value.indexOf(value);
        // let pernetIndex = Math.floor((chiledIndex - 1) / 2);
        // this code above don't need set the chiled index to be parent index becuase it have indexOf that mean it will search on it every time
        let pernetIndex = Math.floor((chiledIndex - 1) / 2);
        if (this.value[chiledIndex] >= this.value[pernetIndex]) {
          let temp = this.value[pernetIndex];
          this.value[pernetIndex] = this.value[chiledIndex];
          this.value[chiledIndex] = temp;
          chiledIndex = pernetIndex;
        } else {
          return false;
        }
      }
      //   //  colt code
      //   insert(element){
      //     this.values.push(element);
      //     this.bubbleUp();
      // }
      // bubbleUp(){
      //     let idx = this.values.length - 1;
      //     const element = this.values[idx];
      //     while(idx > 0){
      //         let parentIdx = Math.floor((idx - 1)/2);
      //         let parent = this.values[parentIdx];
      //         if(element <= parent) break;
      //         this.values[parentIdx] = element;
      //         this.values[idx] = parent;
      //         idx = parentIdx;
      //     }
      // }
    }

    return this.value;
  }

  //

  extractMax() {
    //i think if you test this code, there is problem with swap becuase my swap start form i and i =0 and then i++
    // what if you make swap with the right side //plz test this code
    if (this.value.length < 0) return undefined;
    let i = 0;
    let lastIndex = this.value.length - 1;
    this.value[i] = this.value[lastIndex];
    let removed = this.value.pop();
    while (true) {
      let chiledValueLeft = this.value[i * 2 + 1];
      let chiledValueRight = this.value[i * 2 + 2];
      if (
        chiledValueRight < chiledValueLeft &&
        this.value[i] < chiledValueLeft
      ) {
        let temp = this.value[i];
        this.value[i] = this.value[i * 2 + 1];
        this.value[i * 2 + 1] = temp;
      } else if (
        chiledValueRight > chiledValueLeft &&
        this.value[i] < chiledValueRight
      ) {
        let temp = this.value[i];
        this.value[i] = this.value[i * 2 + 2];
        this.value[i * 2 + 2] = temp;
      } else {
        return removed;
      }
      i++;
    }
  }

  // colt code

  // extractMax(){
  //   const max= this.value[0]
  //   const end = this.value.pop();
  //   this.value[0]=end;
  // if (this.value.length>0) {
  //   this.sinkDown();
  //   return max;
  // }
  // }
  // sinkDown() {
  //   let idx = 0;
  //   const length = this.values.length;
  //   const element = this.values[0];
  //   while (true) {
  //     let leftChildIdx = 2 * idx + 1;//this give you the index of left
  //     let rightChildIdx = 2 * idx + 2;//this will give you the index of right
  //     let leftChild, rightChild;
  //     let swap = null;
  //     if (leftChildIdx < length) { // [1,2,3,4,5] if you take the 3 there chiled will be out of the array , i mean (i*2)+1
  //       leftChild = this.values[leftChildIdx];//3 for the first loop
  //       if (leftChild > element) {//element its the first root in our case , the perent
  //         swap = leftChildIdx;
  //       }
  //     }
  //     if (rightChildIdx < length) {//that mean if the right index exist
  //       rightChild = this.values[rightChildIdx];
  //       if (
  //         (swap === null && rightChild > element) ||  //right chiled greater then the father
  //         (swap !== null && rightChild>leftChild) //this mean if the swap for the left and right chiled is greater then left that mean , the right chiled has the proprty to swap with his father
  //       ) {
  //         swap = rightChildIdx;
  //       }
  //     }
  //     if (swap === null) break;
  //     this.values[idx] = this.values[swap];//the parent will swap with right child or left child
  //     this.values[swap] = element;//make the child that you make swap with him the parent
  //     idx = swap;
  //   }
  // }
}
const heap = new MaxBinaryHeaps();
heap.insert(3);
heap.insert(1);
heap.insert(2);
heap.insert(4);
heap.insert(5);
heap.insert(6);
heap.insert(55);
heap.extractMax();
console.log(heap);

const port = 3500;
app.listen(port, () => {
  console.log("we open in the port " + port);
});
