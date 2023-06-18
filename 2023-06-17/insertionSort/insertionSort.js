function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
}

console.log(insertionSort([9, 4, 7, 5, 3, 10]));
console.log(insertionSort([2, 1, 9, 76, 4]));
