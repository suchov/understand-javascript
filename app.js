// Building GREETR
// When given a frist name, last name, and optional language,
// it generates formal and informal greetings.
// Support English and Spanish language.
// Reusable library/framework.
// Easy to type structure 'G$()' structure.
// support jQuery - include it to jQuery prototype?

var g = G$('John', 'Shit');


g.greet().setLang('es').greet(true).log();

// //different types of building objects
// console.log('--- Building Objects ---');
// // set a prototype
// // every function has a prototype property it is used when you use function as an object constructor(new)
//
// function Person(firstname, lastname) {
//
//   console.log(this);
//   this.firstname = firstname;
//   this.lastname = lastname;
//   console.log('This funtion is invoked');
//
// }
//
// Person.prototype.getFullName = function(){
//   return this.firstname + ' ' + this.lastname;
// };
//
// var john = new Person('John', 'Smith');
// console.log(john);
//
//
// var jane = new Person('Jane', 'Smith');
// console.log(jane);
//
// Person.prototype.getFormalFullName = function(){
//   return this.lastname + ', ' + this.firstname;
// };
//form the efficiensy stendpoint it's better to add your methods to the prototype - it's create only one copy of the method

// console.log('------ Object-Oriented JavaScript and Prototypal Inheritance -----');
// // classical vs prototypal inheritance
// // inheritance - one object get access to the properties of another objects
// // all objects in JS have a proto property
//
// var person = {
//   firstname: 'Default',
//   lastname: 'Default',
//   getFullName: function(){
//     return this.firstname + ' ' + this.lastname;
//   }
// };
//
// var john = {
//   firstname: 'John',
//   lastname: 'Doe',
// };
//
// // don't do this EVER! for demo purposees only!!!
// john.__proto__ = person;
//
// // console.log(john.getFullName());
// // Reflection - an object can look at itself, listing and chaining its properties and methods.
//
// for (var prop in john){
//   if (john.hasOwnProperty(prop)){
//     console.log(prop + ': ' + john[prop]);
//   }
// }
//
// // Extend -
//
// var jane = {
//   address: '111 Main St',
//   getFormalFullName: function() {
//     return this.lastname + ', ' + this.firstname;
//   }
// };
//
// var jim = {
//   getFirsName: function() {
//     return firstname;
//   }
// };
//
// _.extend(john, jane, jim);
//
// console.log(john);
//
// console.log('------ Object-Oriented JavaScript and Prototypal Inheritance -----');
//
//

// console.log('------ Functional Programming -----');
// var arr1 = [1,2,3];
// console.log(arr1);
//
// var arr2 = [];
// for (var i = 0; i < arr1.length; i++){
//   arr2.push(arr1[i] * 2);
// }
// console.log(arr2);
//
// // applying function to each item in the array
// function mapForEach(arr, fn) {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++){
//     newArr.push(
//       fn(arr[i])
//     );
//   }
//   return newArr;
// }
//
// console.log(mapForEach(arr1, function(item) {
//   return item * 2;
// }));
//
// var arr3 = mapForEach(arr1, function(item) {
//   return item > 2;
// });
// console.log(arr3);
//
//
// var checkPassLimit = function(limiter, item) {
//   return item > limiter;
// };
//
// var arr4 = mapForEach(arr1, checkPassLimit.bind(this, 1));
// console.log(arr4);
//
// var checkpassLimitSimplified = function(limiter) {
//   return function(limiter, item) {
//     return item > limiter;
//   }.bind(this, limiter);
// };
//
// var arr5 = mapForEach(arr1, checkpassLimitSimplified(2));
//
// console.log(arr5);
//
// console.log('------ Functional Programming -----');
// console.log('------ Functional Programming Part 2 -----');
//
//
// //underscorejs
// var arr6 = _.map(arr1, function(item){return item * 3;});
// console.log(arr6);
//
// var arr7 = _.filter([2,3,4,5,6,7], function(item) { return item % 2 === 0; });
// console.log(arr7);
//
// console.log('------ Functional Programming Part 2 -----');

// console.log('--------- Closures Part 2 ---------');
// function buildFunctions() {
//   var arr = [];
//
//   for (var i = 0; i < 3; i++){
//     // let j = i; && console.log should log j too - we are not looking to the global context then
//     arr.push(
//       function() {
//         console.log(i);
//       }
//     );
//   }
//   return arr;
// }
// var fs = buildFunctions();
//
// fs[0]();
// fs[1]();
// fs[2]();
//
// console.log('--- creating a closures by closing the anonimous function into ()');
//
// function buildFunctions2() {
//   var arr = [];
//
//   for (var i = 0; i < 3; i++){
//     arr.push(
//       (function(j) {
//         return function() {
//           console.log(j);
//         }
//       }(i))
//     );
//   }
//   return arr;
// }
// var fs = buildFunctions2();
//
// fs[0]();
// fs[1]();
// fs[2]();
//
// console.log('--------- Closures Part 2 ---------');
// console.log('--------- Closures ---------');
// function greet(whattosay) {
//   return function(name) {
//     console.log(whattosay + ' ' + name);
//   };
// }
//
// var sayHi = greet('Hi');
// sayHi('Artem');
//
// console.log('--------- Closures ---------');
// console.log('--------- IIFE - executing code on the fly ---------');
//
// //Executing code on the fly right after we created it, uses by most of the modern libraries
// var greetFunc = function(name) {
//   console.log('Hello '+ name);
// };
// greetFunc('John');
//
// // using an Imidietly Invoced Function Expression IIFE's
// var greeting = function(name){
//   console.log('Hello '+ name);
// }('Artem');
//
// var firstname = 'John';
//
// (function(name){
//   var greeting = 'Inside IIFE: Hello';
//   console.log(greeting + ' ' + name);
// }(firstname)); //IIFE
//
// (function(name){
//   var greeting = 'Inside IIFE: Hello';
//   console.log(greeting + ' ' + name);
// })(firstname); //IIFE invoced outside the prentecies
// console.log('--------- IIFE - executing code on the fly ---------');
// console.log('--------- Function Factories ---------');
//
// function makeGreeting(language) {
//   return function(firstname, lastname) {
//     if (language === 'en'){
//       console.log('Hello ' + firstname + ' ' + lastname);
//     }
//
//     if (language === 'es'){
//       console.log('Hola ' + firstname + ' ' + lastname);
//     }
//   };
// }
//
// var greetEnglish = makeGreeting('en');
// var greetSpanish = makeGreeting('es');
// greetEnglish('Artem', 'Sychov');
// greetSpanish('John', 'Doe');
// greetSpanish('John', 'Just John');
//
// console.log('--------- Function Factories ---------');
// console.log('--------- Call, Apply, This ---------');
//
// var person = {
//   firstname: 'John',
//   lastname: 'Doe',
//   getFullName: function() {
//     var fullname = this.firstname + ' ' + this.lastname;
//     return fullname;
//   }
// };
//
// var logName = function(lang1, lang2){
//   console.log('Logged: ' + this.getFullName());
//   console.log('Arguments ' + lang1 + ' ' + lang2);
//   console.log('---');
// };//.bind(person) will bind this to the person object
//
// var logPersonName = logName.bind(person);
//
// logPersonName('en', 'es');
//
// logName.call(person, 'en', 'us');
//
// logName.apply(person, ['en', 'us']);//OMFG what did they did in this JS, but it just funny I'm just so curruious to try it out!
// //grab methods form other objects and use them
// //function borrowing
// var person2 = {
//   firstname: 'Jane',
//   lastname: 'Doe'
// };
// console.log(person.getFullName.apply(person2));
//
// // function currying - creating a copy of a function but with some preset parameters
// function multiply(a, b) {
//   return a*b;
// }
//
// var multiplyByTwo = multiply.bind(this, 2);
// console.log(multiplyByTwo(11));//bind create a copy of the function, the paramether 2 sets the value of a to 2
//
// console.log('--------- Call, Apply, This ---------');
// console.log('--------- Functional Programming ---------');
//
//
//
// console.log('--------- Functional Programming ---------');
