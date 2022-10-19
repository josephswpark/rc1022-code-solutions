var pork = 100;
var beef = 30;
var kobe = 1000;
console.log('maximumValue:', Math.max((pork, beef, kobe)));

var heroes = ['Batman', 'Ironman', 'Captain America', 'Spiderman'];
var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', Math.random((randomIndex)));

var randomHero = heroes[randomIndex];
console.log('randomHero:', randomHero);

var library = [
  {
    title: '1984',
    author: 'George Orwell'
  },
  {
    title: 'fahrenheit 451',
    author: 'Ray Brandbury'
  },
  {
    title: 'Of Mice and Men',
    author: 'John Steinbeck'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);

var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library:', library);

var fullName = 'Joseph Park';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);

var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
