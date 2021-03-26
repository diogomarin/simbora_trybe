const assert = require('assert');

function wordLengths(array) {
  const result = [];
  for (let i = 0; i < array.length; i += 1) {
    result.push(array[i].length);
  }
  return result;
}

// Escreva a função wordLengths para passar nos testes já implementados
const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];
// Os valores do array expected é a quantidade de letras dos valores do array words

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);