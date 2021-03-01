// Faça um programa que diz se um número definido numa variável é primo ou não

//Definição = Números primos são os números naturais que tem apenas dois divisores (1 e ele mesmo)
//O número 2 é único primo par
//O número 1 não é um número primo porque ele apenas tem um divisor (ele mesmo)
//Assim, a divisão do número primo com quaisquer outros números dá resto diferente de zero


let n = 2;
let divisor = 1;

// if (n = 2) {
//   console.log(n + " é primo");
// } else if (i = 1) {
//   console.log(n + " não é primo");
// } else {
  
  for (let i = 2; i <= n; i += 1) {
    if (n % i === 0) {
      divisor += 1;
    }
  }

  if (divisor === 2) {
    console.log(n + " é primo");
  } else {
    console.log(n + " não é primo");
  }
