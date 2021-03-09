//Criar uma função que receba uma string e retorne true se for um palíndromo
//Palíndromo é uma palavra, frase ou qualquer outra sequência de unidades que leitura direita para esquerda e da esquerda para direita são iguais.

function palindrome (value1) {
  let todasLetras = value1.split('');
  for (let x in todasLetras) {
    if (todasLetras[x] === value1[(value1.length - 1) - x]) {
      checkPalindrome = true;
    } else {
      checkPalindrome = false;
    }
  }
  return checkPalindrome;
}

console.log(palindrome('arara'));
console.log(palindrome('desenvolvimento'));

//outro modo de resolução seria utilizar os metodos reverse e join