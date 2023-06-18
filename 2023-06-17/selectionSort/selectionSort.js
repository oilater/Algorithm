function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = 0;
    for (let j = i + 1; j < arr.length; j++) {
      min = Math.min(arr[i], arr[j]);
      if (min !== arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

console.log(selectionSort([34, 22, 10, 19, 17]));
