// Exemplo de função com complexidade O(n) - Linear
// Big O: O(n)
// Esta função executa uma operação para cada elemento da entrada, então o tempo de execução cresce linearmente com o tamanho da entrada.
function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.time('linear');
console.log('O(n) - sumArray([1, 2, 3, 4, 5]):', sumArray([1, 2, 3, 4, 5]));
console.timeEnd('linear');
