// function add(a, b) {
//   return a + b;
// }
//
// console.log(add(3, 1));
//
// var toAdd = [9, 5];
// console.log(add(...toAdd));

// var groupA = ['Rob', 'Shane'];
// var groupB = ['Norm'];
// var final = [3, ...groupA, ...groupB];
//
// console.log(final);

var person = ['Dino', 29];
var personTwo = ['Nhathy', 30];

var names = ['Mike', 'Ben'];
var final = ['Dino', ...names];

function greetPerson(name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}
greetPerson(...person);
greetPerson(...personTwo)

final.forEach(function(name) {
  console.log('Hi ' + name);
});
