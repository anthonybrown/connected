// Using Backbone Models

var Person = Backbone.Model.extend({
  defaults: {
    name: 'John Doe',
    age: 30,
    occupation: 'IT admin'
  },

  validate: function (attrs) {
    if (attrs.age < 0) {
      var output = $('#output');
      return output.append('Please provide a valid age.');
    }
  },

  work: function () {
    return this.get('name') + ' is working as a ' + this.get('occupation');
  }
});

var person = new Person();

var output = document.getElementById('output');
person.set('age', -30, {validate: true});

output.innerHTML += '<br>'+person.get('name')+'<br />';
output.innerHTML += person.get('age')+ '<br />';
output.innerHTML += person.get('occupation')+ '<br />';
output.innerHTML += person.work()+ '<br />';
output.innerHTML += person.set('age', -30, {validate: true});

var tony = new Person({
  name: 'Tony',
  age: 47,
  occupation: 'JavaScript Developer'
});

output2.innerHTML += '<br>My name is: ' + tony.get('name')+ '.';+'<br>'
output2.innerHTML += '<br>I am ' + tony.get('age')+ ' years old.';+'<br>'
output2.innerHTML += '<br>I work as a ' + tony.get('occupation')+ '.';+'<br>'
output2.innerHTML += '<br>' + tony.work() +'.'+ '<br>';
console.log(tony.toJSON());
