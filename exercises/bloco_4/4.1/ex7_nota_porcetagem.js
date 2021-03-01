//Escreva um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F
//O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let notaPorcentagem = 0;
;

if (notaPorcentagem >= 90 && notaPorcentagem <= 100) {
    console.log("A");
} else if (notaPorcentagem >= 80 && notaPorcentagem < 90) {
    console.log("B");
} else if (notaPorcentagem >= 70 && notaPorcentagem < 80) {
    console.log("C");
} else if (notaPorcentagem >= 60 && notaPorcentagem < 70) {
    console.log("D");
} else if (notaPorcentagem >= 50 && notaPorcentagem < 60) {
    console.log("E");
} else if (notaPorcentagem < 50 && notaPorcentagem >= 0) {
    console.log("F");
} else {
    console.log("erro - nota digitada deve ser entre 0 e 100");
}