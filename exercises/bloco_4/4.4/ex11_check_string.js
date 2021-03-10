//Função recebe uma string word, e outra, uma string ending
//Vrificar se a string ending é o final da sting word
//Considerar a string ending sempre menor que a string word

function finalyIsOk(stringWord, stringEnding) {
  let maiorString = stringWord.split('').length;
  let menorString = stringEnding.split('').length;
  let check;
  if (maiorString > menorString) {
    check = true;
  } else {
    check = false;
  }
  return check;
}

console.log(finalyIsOk('joaofernando', 'fernan'));