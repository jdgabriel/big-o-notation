// Exemplo de função com complexidade O(2^n) - Exponencial
// Big O: O(2^n)
// Esta função resolve o problema da sequência de Fibonacci de forma recursiva, duplicando o número de chamadas a cada incremento de n.
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.time('exponential');
console.log('O(2^n) - fibonacci(5):', fibonacci(5));
console.timeEnd('exponential'); 