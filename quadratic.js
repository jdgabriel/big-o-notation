// Exemplo de função com complexidade O(n^2) - Quadrática
// Big O: O(n^2)
// Esta função possui dois loops aninhados, então o tempo de execução cresce proporcionalmente ao quadrado do tamanho da entrada.
function hasDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}

console.time('quadratic');
console.log('O(n^2) - hasDuplicates([1, 2, 3, 2]):', hasDuplicates([1, 2, 3, 2]));
console.timeEnd('quadratic');
