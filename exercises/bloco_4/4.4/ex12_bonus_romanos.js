//Função recebe uma string em algarismos romanos e retorna o número que a string representa
//Uma string é um array de caracteres, então cada elemento do array é uma letra;
// | I   | 1    |
// | --- | ---- |
// | IV  | 4    |
// | V   | 5    |
// | IX  | 9    |
// | X   | 10   |
// | XL  | 40   |
// | L   | 50   |
// | XC  | 90   |
// | C   | 100  |
// | CD  | 400  |
// | D   | 500  |
// | CM  | 900  |
// | M   | 1000 |

//Regra 1: quando o número da direita é menor que número da esquerda > tem que soma;
//Regra 2: oposto da Regra 1

function numeroEquivalente(romano) {
  let equivalentes = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sequencia = [];
  let numeral = 0;

  for (let i = 0; i < romano.length; i += 1) {
    sequencia[i] = equivalentes[romano[i]];
  }

  for (let j in sequencia) {
    if (sequencia[j] < sequencia[j + 1]) {
      sequencia[j + 1] = sequencia[j + 1] - sequencia[j];
    } else {
      numeral += sequencia[j];
    }
  }
  return numeral;
}

console.log(numeroEquivalente('XI'));
console.log(numeroEquivalente('IX'));
console.log(numeroEquivalente('MLIX'));
console.log(numeroEquivalente('MDD'));