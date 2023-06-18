function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let cur = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = cur;
  }
  return arr;
}

console.log(insertionSort([9, 4, 7, 5, 3, 10]));
console.log(insertionSort([2, 1, 9, 76, 4]));

// 걍 이러면 되는거 아닌가?
