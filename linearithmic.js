// Exemplo de função com complexidade O(n log n) - Linearítmica
// Big O: O(n log n)
// O Merge Sort é um algoritmo de ordenação que divide o array e depois mescla, resultando em O(n log n).
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  return result.concat(left.slice(i)).concat(right.slice(j));
}

console.time('linearithmic');
console.log('O(n log n) - mergeSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]):', mergeSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]));
console.timeEnd('linearithmic'); 