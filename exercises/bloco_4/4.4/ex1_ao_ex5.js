//Imprimir no console uma mensagem de boas-vindas

let info = {
  personagem: 'Margarida',
  origem:'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald'
};

console.log('Bem-vinda ' + info.personagem); //info['personagem']



//Inserir a propriedade recorrente e o valor 'sim' e, em seguida, imprimir o objeto no console

info['recorrente'] = 'sim'; //info.recorrente = 'sim'

console.log(info);

//For/in mostrando todas as chaves do objeto (todas as propriedades)

for (let x in info) {
  console.log(x);
}

//For/in monstrando todos os valores das propriedades do objeto (chaves)

for (let y in info) {
  console.log(info[y]);
}

//A partir de um novo objeto com as mesma propriedades com valores diferentes, exceto a chave recorrente, imprimir os valores de ambos objetos


let info2 = {
  personagem: 'Tio Patinhas',
  origem:'Christmas on Bear, Dells Four Color Comics #178',
  nota: 'O último MacPattinhas',
  recorrente: "sim"
};

for (let propriedades in info) {
  if (info[propriedades] === info2[propriedades] && info.recorrente === info2.recorrente) {
    console.log("Ambos recorrentes");
  } else {
    console.log(info[propriedades] + ' / ' + info2[propriedades]);
  }
};