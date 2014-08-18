// Using Backbone Models

var Person = Backbone.Model.extend({
  defaults: {
    name: 'John Doe',
    age: 30,
    occupation: 'IT admin'
  },

  work: function () {
    return this.get('name') + ' is working as a ' + this.get('occupation');
  }
});

var person = new Person();

var output = document.getElementById('output');

output.innerHTML += person.get('name')+'<br />';
output.innerHTML += person.get('occupation')+ '<br />';

var tony = new Person({
  name: 'Tony',
  age: 47,
  occupation: 'JavaScript Developer'
});

output.innerHTML += '<br>My name is: ' + tony.get('name')+ '<br>';
output.innerHTML += '<br>I am ' + tony.get('age')+ ' years old<br>';
output.innerHTML += '<br>I work as a ' + tony.get('occupation')+ '<br>';
output.innerHTML += '<br>' + tony.work() + '<br>';
