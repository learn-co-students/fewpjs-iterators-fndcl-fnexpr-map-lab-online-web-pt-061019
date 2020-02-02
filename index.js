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

// const titleCased = (array) => {
//   return tutorials.map(tutorial => {
//     let words = tutorial.split(' ');
//     let capWords = words.map(word => {
//       word => word[0].toUpperCase() + word.slice(1)
//     })
//     let updatedWords = capWords.join(' ')
//     return updatedWords;
//   })
// }

// function titleCased(tutorials) {
//
// }

// function titleCased(tutorials) {
//   tutorials.map(function(element) {
//     return element.toUpperCase();
//   })
// }
//
// titleCased(tutorials)

// function titleCased() {
//   // return tutorials.map((tutorial) => tutorial.toUpperCase());
//   return tutorials.map((tutorial) => {
//     let words = tutorial.split(' ');
//     //words = ["what", "does", "the", "this", "keyword", "mean?"]
//
//
//
//     // words.map((word) => {
//     //   // let newWord = word[0].toUpperCase() + word
//     //   //
//     //   // return newWord
//     //
//     //   // let newWord = word[0].toUpperCase() + word.slice(1)
//     //   //
//     //   // return newWord
//     //
//     //   let firstLetter = word[0].toUpperCase()
//     //
//     //   return firstLetter
//     //   let restOfWord = word.slice(1)
//     //
//     //   return firstLetter + restOfWord
//     //
//     // })
//     //
//     // return words
//
// // let updatedWords = newWord.join(' ')
// //     return updatedWords
//
//
//     // words.map((word) => {
//     //   let word = word[0].toUpperCase() + word.slice(1)
//     // })
//
//   })
// }

// function titleCased(tutorials) {
//   tutorials.map(function(tutorial) {
//     let words = tutorial.split(" ")
//
//     return words.map(function(word) {
//       // let word =
//       return word[0].toUpperCase() + word.slice(1)
//     })
//
//     words.join(" ")
//   })
//
// }

function titleCased() {
  return tutorials.map(tutorial => {
    let words = tutorial.split(" ")

    let cappedWords = words.map(word => word[0].toUpperCase() + word.slice(1))

    let updatedWords = cappedWords.join(" ")
    return updatedWords
  })
}
