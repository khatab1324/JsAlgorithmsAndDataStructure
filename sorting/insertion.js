const express = require("express");
app = express();

function insertion(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}
console.log(insertion([2, 1, 4, 3, 33, 22, 12]));

const port = 3000;
app.listen(port, () => {
  console.log(`open in port ${port}`);
});
