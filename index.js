const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function (tutorialString) {
    let words = tutorialString.split(' ')
    //split() :used to split a String object into an array of strings by separating the string into substrings
    let upcaseStartLetter = words.map(letter => letter.charAt(0).toUpperCase() + letter.slice(1))
    // .charAt().toUpperCase() :first character of the above string/words to upper case
    // + add the sliced part of the word (rest of it)
    //.slice(1) :extracts parts of a string and returns the extracted parts in a new string

  return upcaseStartLetter.join(' ')
    // join() method joins all elements of an array into a string
  });
};
