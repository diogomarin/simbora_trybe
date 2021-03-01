//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let pesquisa = "kiNg";
let nomePeca = pesquisa.toLowerCase();

switch (nomePeca) {
    case "bispo":
        console.log("O bispo se move em uma linha reta diagonalmente no tabuleiro. Ele pode mover-se por tantas casas quantas quiser, até encontrar o final do tabuleiro ou outra peça")
        break;
    
    case "peão":
        console.log("De maneira geral, os peões se movem somente para frente, uma casa por vez. Um exceção é a primeira vez que um peão é movido, quando ele pode se mover duas casas. O peão não pode pular outras peças");
        break;
    
    case "torre":
        console.log("A torre se move em linha reta horizontalmente e verticalmente pelo número de casas não ocupadas, até atingir o final do tabuleiro ou ser bloqueado por outra peça");
        break;
    
    case "cavalo":
        console.log("O cavalo é a única peça do tabuleiro que pode pular sobre outras peças. O cavalo move-se por duas casas horizontalmente ou verticalmente e então uma casa a mais em uma ângulo reto. O movimento do cavalo forma um L");
        break;
    
    case "reainha":
        console.log("Ela pode mover-se qualquer número de casas em linha reta - verticalmente, horizontalmente ou diagonalmente");
        break;
    
    case "rei":
        console.log("O rei tem pouca mobilidade, assim ele é considerado também uma das peças mais fracas no jogo. O rei pode se mover para qualquer casa adjacente");
        break;

    default:
        console.log("Nome da peça não encontrado, digite novamente (em portguês)");
}
