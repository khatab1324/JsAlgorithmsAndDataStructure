const express = require("express");
const app = express();
// pesodocode

// function countZeroes(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   let mid = 0;
//   while (left < right) {
//     mid = Math.floor((left + right) / 2);
//     if (arr[mid] === 0) {
//       if (arr[mid - 1] === 1) return arr.length - mid;
//       right = mid;
//     } else {
//       if (arr[mid + 1] === 0) return arr.length - 1 - mid;
//       left = mid + 1;
//     }
//   }
//   if (arr[arr.length - 1] === 0) return arr.length - mid;
//   return 0;
// }
// console.log(countZeroes([1,0,0,0,0]));

function countZeroes(arr) {
  let left = 0;
  let right = arr.length;
  let mid = 0;
  while (left < right) {
    mid = Math.floor((left + right) / 2);
    console.log(mid);
    if (arr[mid] === 0) right = mid;
    if (arr[mid] === 1) left = mid + 1;
  }
  return arr.length - left;
}
console.log(countZeroes([1, 1, 1, 0, 0, 0, 0, 0, 0]));
const port = 3500;
app.listen(port, () => {
  console.log("we open on port " + port);
});
