const express = require("express");
app = express();

function margingArray(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;
  while (arr1.length > i && arr2.length > j) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  return result;
}

function meregeSort(arr) {
  if (arr.length <= 1) return arr;
  let arrayPart1 = meregeSort(arr.slice(0, Math.floor(arr.length / 2)));
  let arrayPart2 = meregeSort(arr.slice(Math.floor(arr.length / 2)));
  return margingArray(arrayPart1, arrayPart2);
}
console.log(meregeSort([10, 24, 76, 73, 72, 1, 9]));

const port = 3001;
app.listen(port, () => {
  console.log(`**********the port ${port} start ***************`);
});
