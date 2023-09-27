const express = require("express");
app = express();
function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    console.log(array);
  }
  let pivot = arr[start];
  let swapIdx = start;
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}
function quick(arr, left = 0, right = arr.length - 1) {
  let pivotIndex = pivot(arr, left, right);
  if (pivotIndex === left) return arr;
  //left
  quick(arr, left, pivotIndex - 1);
  //right
  quick(arr, pivotIndex + 1, right);
  return arr;
}
// colt code
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right); //3
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}
console.log(quick([4, 1, 9, 1, 2, 5, 2, 11, 3, 6]));
const port = 3000;
app.listen(port, () => {
  console.log(`open in port ${port}`);
});
