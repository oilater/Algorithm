// bubble Sort 구현해보자

function bubbleSort(arr) {
  const last = arr.length - 1;
  for (let i = last; i > 0; i--) {
    for (let j = last; j >= i - 1; j--) {
      if (arr[j] < arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        console.log(arr, arr[j], arr[j - 1]);
      }
    }
  }

  return arr;
}

console.log(bubbleSort([37, 45, 29, 8]));
// [ 1, 2, 3, 3, 4, 5, 6, 7]
