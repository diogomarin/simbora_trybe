const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// Testando se as constantes são objetos
assert.strictEqual(typeof obj1, 'object');
assert.strictEqual(typeof obj2, 'object');
assert.strictEqual(typeof obj3, 'object');

// Verificando se as constantes são iguais
assert.deepStrictEqual(obj1, obj2);
assert.notDeepStrictEqual(obj1, obj3);