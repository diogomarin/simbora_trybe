const longestWord = (text) => {
  const wordArray = text.split(' ');
  let maxLength = 0;
  let result = '';

  for (const word of wordArray) {
    if (word.length > maxLength) {
      maxLength = word.length
      result = word;
    }
  }
  return result;
}

console.log(longestWord('Antonio foi no banheiro e não sabemos o que aconteceu'));

const longestWord2 = (text) => text.split(' ').sort((a, b) => b.length - a.length)[0];

console.log(longestWord2('Antonio foi no banheiro e não sabemos o que aconteceu'));
