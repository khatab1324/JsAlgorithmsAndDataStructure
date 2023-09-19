express = require("express");
app = express();

const arr2 = [1, 3, 40, 36, 55, 4, 33];
function SortSelection(arr2) {
  let count = 0;
  for (let i = 0; i < arr2.length; i++) {
    for (let j = i + 1; j < arr2.length; j++) {
      let min = arr2[i];
      if (min > arr2[j]) {
        // swap
        let temp = arr2[i];
        arr2[i] = arr2[j];
        arr2[j] = temp;
      }
      count++;
      //   now to increase the optimization , I will add checker . this checkr will see if we don't make any swap at the last time that mean our array are ordered that mean don't make any unneed swap
      //if there no swap === our array are order

      console.log(arr2, arr2[j]);
      console.log("the count is in my code : ", count);
      console.log("min : ", min);
    }
    console.log("*****************************");
  }
  return arr2;
}
console.log(SortSelection(arr2));
// colt code

// // // LEGACY VERSION (non ES2015 syntax)
// function sselectionSort(arr){
//     for(var i = 0; i < arr.length; i++){
//         var lowest = i;
//         for(var j = i+1; j < arr.length; j++){
//             if(arr[j] < arr[lowest]){
//                 lowest = j;
//             }
//         }
//         if(i !== lowest){
//             //SWAP!
//             var temp = arr[i];
//             arr[i] = arr[lowest];
//             arr[lowest] = temp;
//         }
//     }
//     return arr;
// }

// // // ES2015 VERSION
// function selectionSort2(arr) {
//   let count = 0;
//   const swap = (arr, idx1, idx2) =>
//     ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

//   for (let i = 0; i < arr.length; i++) {
//     let lowest = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[lowest] > arr[j]) {
//         lowest = j;
//       }
//       count++;
//     }
//     if (i !== lowest) swap(arr, i, lowest);
//   }
//   console.log("the count is : ", count);
//   return arr;
// }

// console.log(selectionSort2([0, 2, 34, 22, 10, 19, 17]));

const port = 3001;
app.listen(port, () => {
  console.log(`**********the port ${port} start ***************`);
});
