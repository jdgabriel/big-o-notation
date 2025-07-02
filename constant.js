// Exemplo de função com complexidade O(1) - Constante
// Big O: O(1)
// Esta função sempre executa a mesma quantidade de operações, independentemente do tamanho da entrada.
function getFirstElement(arr) {
  return arr[0];
}

console.time('constant');
console.log('O(1) - getFirstElement([10, 20, 30]):', getFirstElement([10, 20, 30]));
console.timeEnd('constant'); 