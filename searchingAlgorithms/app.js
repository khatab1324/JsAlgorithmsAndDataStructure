const express = require("express");
const app = express();
// searching is make search like in array
const usaStates = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

// lainer search that is use for loop for every element and it take big o n(o)

function binarySearch(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    console.log(middle);
    if (arr[middle] === num) return middle;
    else if (arr[middle] < num) left = middle + 1;
    else right = middle - 1;
  }
  return -1; 
}
console.log(
  binarySearch(
    [
      -4, -2, 0, 3, 4, 6, 10, 14, 15, 18, 20, 24, 26, 27, 29, 30, 31, 44, 47,
      49,
    ],
    -5
  )
);

port = 3005;
app.listen(port, () => {
  console.log(`open in port : ${port} ^__-`);
});
