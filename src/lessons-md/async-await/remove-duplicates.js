const stri = 'bom dia dia  meu amigo amigo';
const strCleaner = (str) => [ ... new Set(str.split(' ')) ].join(' ');
const strtCleaners = (str) => [... new Set(str.split(' '))].join(' ')

const strCleanerI = (str) => {
  const words = str.split(' ');
  const uniqueWords = [];
  for (let word of words) {
    if (!uniqueWords.includes(word)) {
      uniqueWords.push(word);
    }
  }
  return uniqueWords.join(' ');
};

const strCleanerIII = (str, uniqueWords = []) => {
  const words = str.split(' ');
  // Base case: if there are no more words to process
  if (words.length === 0) {
    return uniqueWords.join(' ');
  }
  // Take the first word and rest of the words
  const [firstWord, ...restWords] = words;
  // If the word is not already in the uniqueWords array, add it
  if (!uniqueWords.includes(firstWord)) {
    uniqueWords.push(firstWord);
  }
  // Recurse with the remaining words and updated uniqueWords
  return strCleanerIII(restWords.join(' '), uniqueWords);
};


// Base case: If there are no more words to process (words.length === 0), return the uniqueWords array joined into a string.
// Recursive step: Split the string into the first word and the remaining words.
// If the first word isn't already in uniqueWords, add it.
// Recur by calling strCleaner with the rest of the words and the updated uniqueWords array


const stri = 'bom dia dia meu amigo amigo';

const removingDuplicates = (str) => [... new Set(str.split(' '))].join(' ')

console.log(removingDuplicates(stri))

const stringui = 'aaaaabc'
const removingStupit = (stringui) => [ ... new Set( stringui.split(''))].join('')
console.log(removingStupit(stringui))

const stringuise = 'aaaaabc aaaaabd'
const RemovingDuplicatesFromStrings = (str, typeToBeRemoved) => {
    let param = typeToBeRemoved ==='word'?' ':''
    return[... new Set(str.split(param))].join(param)
    
}



const RemovingDuplicatedCharactersFromNonRepeatedWords = (str) => {
   return RemovingDuplicatesFromStrings(RemovingDuplicatesFromStrings(str, 'word'), 'character')
}

console.log(RemovingDuplicatedCharactersFromNonRepeatedWords('bom dia dia meu amigo amigo'))


const Ref = "Maria";
const teste = (testandoRef) => testandoRef
const isRef = teste(Ref)
console.log(console.log(Object.getPrototypeOf(Ref) === Object.getPrototypeOf(isRef)))
