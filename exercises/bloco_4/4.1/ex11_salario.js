//Uma pessoa de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido por ela.

let salarioBruto = 3000;


if (salarioBruto <= 1555.94) {
    var deducaoInss = 0.08 * salarioBruto
} else if (salarioBruto >= 1555.95 && salarioBruto <= 2594.92) {
    var deducaoInss = 0.09 * salarioBruto
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    var deducaoInss = 0.11 * salarioBruto
} else {
    var deducaoInss = 570.88
}

let salarioBase = salarioBruto - deducaoInss


if (salarioBase <= 1903.98) {
    aliquotaImpostoDeRenda = "isento de imposto de renda"
    impostoDeRenda = 0
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    aliquotaImpostoDeRenda = 0.075
    deducaoImpostoDeRenda = 142.80
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    aliquotaImpostoDeRenda = 0.15
    deducaoImpostoDeRenda = 354.80
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    aliquotaImpostoDeRenda = 0.225
    deducaoImpostoDeRenda = 636.13
} else {
    aliquotaImpostoDeRenda = 0.275
    deducaoImpostoDeRenda = 869.36
}

let salarioLiquido = salarioBase - ((salarioBase * aliquotaImpostoDeRenda) - deducaoImpostoDeRenda)

console.log("Salário Bruto de " + salarioBruto + " reais")
console.log("Alíquota do INSS = " + (deducaoInss / salarioBruto))
console.log("Dedução do INSS é de " + deducaoInss + " reais")
console.log("Salário Base de " + salarioBase + " reais")
console.log("Alíquota do IR = " + aliquotaImpostoDeRenda)
console.log("Valor a deduzir no IR = " + deducaoImpostoDeRenda + " reais")
console.log("Valor à descontar = " + ((salarioBase * aliquotaImpostoDeRenda) - deducaoImpostoDeRenda) + " reais")
console.log("Salário Líquido de " + salarioLiquido + " reais")