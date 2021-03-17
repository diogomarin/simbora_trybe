// Desafio 10
function techList(techName, name) {
  let orderTechName = techName.sort();
  let output = [];
  let object = {};
  if (orderTechName.length === 0) {
    output = 'Vazio!';
  }
  for (let i = 0; i < orderTechName.length; i += 1) {
    object[i] = { tech: orderTechName[i], name: name };
    output[i] = object[i];
  }
  return output;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
