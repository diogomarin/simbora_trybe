function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :0');
}

testingScope(true);
console.log(`--------------------------------------`);

// utilizando arrow function e template literals
const testingScope2 = (escopo) => {
  if (escopo === true) {
    let ifScope = 'não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
    console.log(ifScope);
  } else {
    const elseScope = 'não devo ser utilizada fora do meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope2(true);