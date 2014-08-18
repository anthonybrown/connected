// Example of a class in Plain old JavaScript
// it stores properties 
// and new instances can inherite from the main 'class'

var Person = function (config) {
  this.name       = config.name;
  this.age        = config.age;
  this.occupation = config.occupation;
};

Person.prototype.work = function() {
  return this.name + ' works as a ' + this.occupation;
};

var output = document.getElementById('output');
// document.ready needs to be invoked before jQuery will work
// I prefere to use vanilla JavaScript here because output will be undefined
// at the body where innerHTML is used.

//$(function() {
//  var output = $('#output');
//});

var tony = new Person({
  name: 'Tony Brown',
  age: 47,
  occupation: 'JavaScript Developer!'
});

var klaudia = new Person({
  name: 'Klaudia Brown',
  age: 36,
  occupation: 'master of all things'
});

var jacob = new Person({
  name: 'Jacob Brown',
  age: 10,
  occupation: 'best son a parent could want'
});

console.log(tony.name + '\n'+ tony.age +'\n' + tony.work());
console.log(klaudia.name + '\n' + klaudia.age + '\n' + klaudia.work());
console.log(jacob.name + '\n'+ jacob.age + '\n' + jacob.work());
output.innerHTML += '<br />'+  tony.name + '<br />' + tony.age + '<br />' + tony.work() + '<br />';
output.innerHTML += '<br />'+ klaudia.name + '<br />' + klaudia.age + '<br />' + klaudia.work() + '<br />';
output.innerHTML += '<br />'+  jacob.name + '<br />' + jacob.age + '<br />' + jacob.work() + '<br />';
