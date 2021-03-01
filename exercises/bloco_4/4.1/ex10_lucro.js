//Escreva um programa que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
//Atente que, sobre o custo do produto, incide um imposto de 20%, que deve ser considerado no cálculo do lucro.
//Seu programa também deve emitir uma mensagem de erro e encerrar, caso algum dos seus valores de entrada seja menor que zero.
//O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.

let valorCusto= 100;
let valorVenda = 150;
let imposto = 20;
let produtosVendidos = 1000;

valorCustoTotal =  valorCusto * (1 + (imposto/100))
lucroPorProduto = valorVenda - valorCustoTotal
lucroTotal = lucroPorProduto * produtosVendidos

console.log("A empresa terá ao vender " + produtosVendidos + " desses produtos um lucro de " + lucroTotal + " reais");