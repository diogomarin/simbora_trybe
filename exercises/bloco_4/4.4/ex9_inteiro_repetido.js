//Função vai receber um array de inteiros e retorne o inteiro que mais se repete
function numeroMaisRepetido (numbers) {
  let contadorDeRepeticao = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    let numeroRepetido = numbers[i];
    for (let j in numbers) {
      if (numeroRepetido === numbers[j]) {
        contadorDeRepeticao += 1;
      }
    }
    return numeroRepetido + ' / ' + contadorDeRepeticao;
  }
}

console.log(numeroMaisRepetido([2, 3, 2, 5, 8, 2, 3]));