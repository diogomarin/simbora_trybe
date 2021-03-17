// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } if (value1 === false || value2 === false) {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  let arrayOfStrings = string.split(' ');
  return arrayOfStrings;
}

// Desafio 4
function concatName(array) {
  let swap = array[array.length - 1];
  swap += ', ';
  swap += array[0];
  return swap;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function indexMaxNumber(array) {
  let numberMax = 0;
  for (let indexMaxValue in array) {
    if (array[indexMaxValue] > numberMax) {
      numberMax = array[indexMaxValue];
    }
  }
  return numberMax;
}

function highestCount(array) {
  let maxNumber = indexMaxNumber(array);
  let repeat = 0;
  for (let indexCheckRepeat in array) {
    if (array[indexCheckRepeat] === maxNumber) {
      repeat += 1;
    }
  }
  return repeat;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  let result;
  if (dist1 === dist2) {
    result = 'os gatos trombam e o rato foge';
  } else if (dist1 > dist2) {
    result = 'cat2';
  } else {
    result = 'cat1';
  }
  return result;
}

// Desafio 8
function divisionByThree(number) {
  let result;
  if (number % 3 === 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function divisionByFive(number) {
  let result;
  if (number % 5 === 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function fizzBuzz(arrayOfNumbers) {
  let array = [];
  for (let i in arrayOfNumbers) {
    if (divisionByThree(arrayOfNumbers[i]) && divisionByFive(arrayOfNumbers[i])) {
      array.push('fizzBuzz');
    } else if (divisionByThree(arrayOfNumbers[i])) {
      array.push('fizz');
    } else if (divisionByFive(arrayOfNumbers[i])) {
      array.push('buzz');
    } else {
      array.push('bug!');
    }
  }
  return array;
}

// Desafio 9
function encode(stringOfLetters) {
  let letters = stringOfLetters.split('');
  let vogais = ['a', 'e', 'i', 'o', 'u'];
  let numbers = [1, 2, 3, 4, 5];
  for (let x = 0; x < letters.length; x += 1) {
    for (let y = 0; y < letters.length; y += 1) {
      if (vogais[y] === letters[x]) {
        letters[x] = numbers[y];
      }
    }
  }
  return letters.join('');
}

function decode(stringOfNumbers) {
  let numbersAndLetters = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let newNumbers = '';
  for (let caractere in stringOfNumbers) {
    if (typeof numbersAndLetters[stringOfNumbers[caractere]] === 'undefined') {
      newNumbers += stringOfNumbers[caractere];
    } else {
      newNumbers += numbersAndLetters[stringOfNumbers[caractere]];
    }
  }
  return newNumbers;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
