// bubble Sort 구현해보자

function bubbleSort(arr) {
  let noSwaps;
  const last = arr.length;
  for (let i = last; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) return arr;
  }
  if (arr.length == 0) return [];
}

console.log(bubbleSort([]));
// [ 1, 2, 3, 4, 5, 6, 7, 8 ]
