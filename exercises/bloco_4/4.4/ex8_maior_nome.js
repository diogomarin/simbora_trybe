//Função vai receber um array de nomes e deve retornar o nome com maior quantidade de caracteres

function maiorString(arrayOfStrings) {
  let maiorString = arrayOfStrings[0];
  for (let i in arrayOfStrings) {
    if (maiorString.length < arrayOfStrings[i].length) {
      maiorString = arrayOfStrings[i];
    }
  }
  return maiorString;
}

console.log(maiorString(['josé', 'lucas', 'nádia', 'fernanda']));