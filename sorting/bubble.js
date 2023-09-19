express = require("express");
app = express();

[1, 3, 43, 5, 33, 23, 22, 10].sort(); // [1, 10, 22, 23, 3, 33, 43, 5]
// but if
function test(a, b) {
  return a - b;
}
// and then put it in sort
[1, 3, 43, 5, 33, 23, 22, 10].sort(test); //[1, 3, 5, 10, 22, 23, 33, 43]

["a,b,spsp,fds,faf,te,we"].sort(); //it will sort in order normal

// implementing bubble
// my way

const arr2 = [1, 3, 40, 55, 4, 33];
function SortBubble(arr2) {
  let noSwap;
  let count = 0;
  for (let i = 0; i < arr2.length; i++) {
    noSwap = true;
    for (let j = 0; j < arr2.length - i; j++) {
      if (arr2[j] > arr2[j + 1]) {
        // swap
        let temp = arr2[j];
        arr2[j] = arr2[j + 1];
        arr2[j + 1] = temp;
        noSwap = false;
      }
      count++;
      //   now to increase the optimization , I will add checker . this checkr will see if we don't make any swap at the last time that mean our array are ordered that mean don't make any unneed swap
      //if there no swap === our array are order

      console.log(arr2, arr2[j], count);
    }
    console.log("*****************************");
    if (noSwap) break;
  }
  return arr2;
}

//colt way

// function SortBubble(arr2) {
//   for (let i = arr2.length; i > 0; i--) {
//     for (let j = 0; j < i; j++) {
//       if (arr2[j] > arr2[j + 1]) {
//         // swap
//         let temp = arr2[j];
//         arr2[j] = arr2[j + 1];
//         arr2[j + 1] = temp;
//       }
//       console.log(arr2, arr2[j], count);
//     }
//   }
//   return arr2;
// }
console.log(SortBubble(arr2));

const port = 3001;
app.listen(port, () => {
  console.log(`**********the port ${port} start ***************`);
});
