// Exemplo de função com complexidade O(n!) - Fatorial
// Big O: O(n!)
// Esta função gera todas as permutações possíveis de um array, cujo número de operações cresce fatorialmente com o tamanho da entrada.
function permute(arr) {
  if (arr.length <= 1) return [arr];
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    const remaining = arr.slice(0, i).concat(arr.slice(i + 1));
    const perms = permute(remaining);
    for (let perm of perms) {
      result.push([current].concat(perm));
    }
  }
  return result;
}

console.time('factorial');
console.log('O(n!) - permute([1, 2, 3]):', JSON.stringify(permute([1, 2, 3])));
console.timeEnd('factorial'); 