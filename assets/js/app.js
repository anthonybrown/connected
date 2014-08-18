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

var tony = new Person({
  name: 'Tony Brown',
  age: 47,
  occupation: 'JavaScript Developer'
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


