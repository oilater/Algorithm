function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > cur; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = cur;
  }
  return arr;
}

console.log(insertionSort([9, 4, 7, 5, 3, 10]));
console.log(insertionSort([3, 2])); // 2 3 1 76 4
