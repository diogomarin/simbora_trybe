//Dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n 

console.log("exercicie 1");

let n = 5;
let caractere = "*"
let line = "";

for (let index = 0; index <  n; index += 1) {
    line = line + caractere;
}

for (let index = 0; index < n; index += 1) {
    console.log(line);
}
