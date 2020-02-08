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


function toTitleCase(str) {
  // return str.replace(
  //     /\w\S*/g,
  //     function(txt) {
  //         return txt.charAt(0).toUpperCase() + txt.substr(1);

  //       }
  // );
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}



// const titleCased = (tutorials) => {
//   return tutorials
//   .split(' ')
//   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//   .join(' ');
// };



function titleCased() {
  return tutorials.map(toTitleCase) 
}

// const titleCased = () => {
//   return tutorials
// }
