const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameter must be numbers');
  }

  return a + b;
}

const expected = sum(4, 5);

// Testando se a sum é realmente uma função
assert.strictEqual(typeof sum, 'function');

// Teste se o retorno de sum(4, 5) é 9
assert.strictEqual(expected, 9);

// Teste se o retorno de sum(0, 0) é 0
assert.strictEqual(sum(0, 0), 0);

//Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
assert.throws(() => { sum(4, 5); });

//Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
assert.throws(() => { sum(4, '5'); }, /^Error: parameter must be numbers$/);