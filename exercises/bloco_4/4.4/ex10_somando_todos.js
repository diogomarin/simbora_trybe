//Criar uma função que recebe um número inteiro N e retorne o somatório de todos os números de 1 até N
function sumAllNumbers(inteiro) {
  let sum = 0;
  for (let i = 0; i <= inteiro; i += 1) {
    sum += i;
  }
  return sum;
}

console.log(sumAllNumbers(5));