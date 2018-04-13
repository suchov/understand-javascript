(function(global, $) {
  // new object
  var Greetr = function(firstName, lastName, language){
    return new Greetr.init(firstName, lastName, language);
  };

  // hidden within the scope of the IIFE and never directly accessible
  var supportedLangs = ['en', 'es', 'fr'];

  // invormal greetings
  var greetings = {
    en: 'Hello',
    es: 'Hola',
    fr: 'Fula'
  };

  // formal Greeting
  var formalGreetings = {
    en: 'Greetings',
    es: 'Saludos',
    fr: 'Fuflo'
  };

  // logger messages
  var logMessages = {
    en: 'Logged in',
    es: 'Inicio sesion',
    fr: 'Fufel'
  };

  // prototype holds methods (to save memory space)
  Greetr.prototype = {
    // 'this' refers to the calling object at execution time
    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    },
    validate: function() {
      // checks that is a valid language
      // references the externally inaccessible 'supportedLangs' within the closure
      if (supportedLangs.indexOf(this.language) === -1) {
        throw "Invalid language";
      }
    },
    // retrieve messages from object ty referring to properties using [] syntax
    greeting: function() {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },

    rockGreeting: function() {
      return this.firstName.toUpperCase() + ', YOU ROCK!'
    },

    coolGreeting: function(){
      return this.firstName.toUpperCase() + ', YOU ARE COOL!'
    },

    formalGreeting: function() {
      return formalGreetings[this.language] + ', ' + this.fullName();
    },
    // chainable methods returns their own containing object
    greet: function(formal) {
      var msg;
      //if undefined of null it will be coerced to 'false'
      if (formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }
      // 'this' refers to the calling object at execution time
      // makes the method chainable
      return this;
    },
    coolGreet: function(selector, rock) {
      var msg;
      if (rock) {
        msg = this.rockGreeting();
      }
      else {
        msg = this.coolGreeting();
      }
      if (console) {
        console.log(msg);
      }
      // inject the message in the chosen place in the DOM
      $(selector).html(msg);
      // make chainable
      return this;
    },
    log: function(){
      if(console){
        console.log(logMessages[this.language] + ': ' + this.fullName());
      }
      // make chainable
      return this;
    },

    setLang: function(lang) {
      // set language
      this.language = lang;
      // validate
      this.validate();
      // make chainable
      return this;
    },
    HTMLGreeting: function(selector, formal){
      if (!$) {
        throw 'jQuery is not around';
      }
      if (!selector) {
        throw 'Please add a selector';
      }
      // determine the message
      var msg;
      if (formal) {
        msg = this.formalGreeting();
      }
      else {
        msg = this.greeting();
      }
      // inject the message in the chosen place in the DOM
      $(selector).html(msg);
      // make chainable
      return this;
    },
    throwConsole: function(some) {
      throw 'This is a message from the hell we have some methods here ' + some ;
    }
  };
  // the actual object is created here, allowing us to 'new' an object without calling 'new'
  Greetr.init = function(firstName, lastName, language){

    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';

    self.validate();

  };
  // trick borrowed from jQuery so we don't have to use the 'new' keyword
  Greetr.init.prototype = Greetr.prototype;
  // attach our Greetr to the global object, and provide a shorthand '$G' for ease our poor fingers
  global.Greetr = global.G$ = Greetr;

}(window, jQuery));
