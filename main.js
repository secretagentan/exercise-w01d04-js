// ====================
// task 1
// ====================

// Write a function called knighted that takes a name and returns it with "Sir" in front
function knighted(name) {
  document.querySelector("#task-1").innerHTML = "Sir " + name;
};
var name = knighted("Elton");

// when you use it - it should look like this

// var name = knighted('Elton');
// console.log(name) => 'Sir Elton'

// ====================
// task 2
// ====================

// Write a function called doubleIt that takes a number, doubles it and returns the new number
function doubleIt(num) {
  var double = 2 * num;
  document.querySelector("#task-2").innerHTML = double;
};
var answer = doubleIt(2);
// console.log(answer) => 4

// ====================
// task 3
// ====================

// Write a function called makeUser that takes a name and returns a new object
function makeUser(user) {
  document.querySelector("#task-3").innerHTML = "{name: " + user + "}";
};
var user = makeUser('Dave');
// console.log(user) => {name: 'Dave'}

// ====================
// task 4
// ====================

// Write a function called makeLink that takes a title and a url and returns a string of html
function makeLink(site, link) {
  document.querySelector("#task-4").innerText = '<a href="' + link + '">' + site + '</a>';
};
var aTag = makeLink('google', 'http://www.google.com');
// console.log(aTag) => '<a href="http://www.google.com">google</a>'

// ====================
// task 5
// ====================

// Write a function called second that takes an array and returns the 2nd element in it
function second(array) {
  document.querySelector("#task-5").innerText = array[1];
};
var answer = second(['a', 'b', 'c']);
// console.log(answer) => 'b'

// ====================
// task 6
// ====================

// Write a function called toSentence that takes an array and returns a string
function toSentence (mammals) {
  var animals = mammals;
  function lionsUp() {
    mammals[0].toUpperCase() + mammals.slice(1);
  };
  var animalList = animals.join(", ");
  document.querySelector("#task-6").innerText = animalList.lionsUp();
}
// where the items are joined by commas (except the last one which is joined with 'and')
// where the first letter is capitalized and the string ends in an exclamation point.

var sentence = toSentence(['lions', 'tigers', 'bears']);
// console.log(sentence) // 'lions, tigers, and bears!'

// ====================
// task 7
// ====================

// Write a function called random number that returns a random number between 0 and x
// Hint: Take a look at MDN's docs on Math.random
// var answer = randomNumber(5);
// console.log(answer) // 0..5

// ====================
// task 8
// ====================

// Write a function called magicEightball that returns a random answer from the following list
// "yes", "no", "maybe", "ask again later", "most likely"
// var answer = magicEightball();
// console.log(answer) // yes || no || maybe etc...

// ====================
// task 9
// ====================

// Write a function called pluck that takes an array of objects and a key as arguments
// and returns a list of those properties
// var students = [{name: 'Harry', age: 12}, {name: 'Hermione', age: 13}, {name: 'Draco', age: 13}];
// var names = pluck(students, 'name');
// console.log(names) // ['Harry', 'Hermione', 'Draco']
