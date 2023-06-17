function naive(str1, str2) {
  let count = 0;
  let semi = 0;

  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] === str2[j]) {
        if (str1[j] === str2[j]) {
          semi++;
        }
        if (semi === str2.length) {
          count++;
          semi = 0;
        }
      }
    }
  }
  return count;
}

console.log(naive("abcabcdabe", "ab"));
