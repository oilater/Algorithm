// function binarySearch(arr, n) {
//   let start = 0;
//   let end = arr.length - 1;
//   let center = Math.floor((start + end) / 2);

//   while (n !== arr[center] && start <= end) {
//     if (n < arr[center]) {
//       end = center - 1;
//     } else {
//       start = center + 1;
//       center = Math.floor((start + end) / 2);
//     }
//   }
//   return arr[center] === n ? center : -1;
// }

// console.log(binarySearch([2, 5, 6, 9, 13, 15, 28], 10)); // 5
// console.log(binarySearch([1, 2, 3, 4, 5], 2)); // 1
// console.log(binarySearch([1, 2, 3, 4, 5], 3)); // 2
// console.log(binarySearch([1, 2, 3, 4, 5], 5)); // 4
// console.log(binarySearch([1, 2, 3, 4, 5], 6)); // -1
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     10
//   )
// ); // 2
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     95
//   )
// ); // 16
// console.log(
//   binarySearch(
//     [
//       5, 6, 10, 13, 14, 18, 30, 34, 35, 37, 40, 44, 64, 79, 84, 86, 95, 96, 98,
//       99,
//     ],
//     100
//   )
// ); // -1

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== elem && start <= end) {
    if (elem < arr[middle]) {
      end = middle - 1;
      middle = Math.floor((start + end) / 2);
    } else {
      start = middle + 1;
      middle = Math.floor((start + end) / 2);
    }
  }

  return arr[middle] == elem ? middle : -1;
}

console.log(binarySearch([2, 5, 6, 9, 13, 15, 28], 28));
