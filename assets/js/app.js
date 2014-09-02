    $(function() {
    // Show or hide the sticky footer button
      $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
          $('.go-top').fadeIn(300);
        } else {
          $('.go-top').fadeOut(300);
        }
      });

      // Animate the scroll to top
      $('.go-top').click(function(e) {
        e.preventDefault();

        $('html, body').animate({
          scrollTop: 0
        }, 700);
      });
    });

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
      return output.append('<p class="err"><i><b>Please provide a valid age.</b></i></p>')+
      console.log('age must be positive');
    }

    if (! attrs.name) {
      // this is bad practice, mixing in view stuff with the data
      // done here only for outputting the results in a visible manner
      var output = $('#output');
      return output.append('<p class="err"><i><b>Everyone has a name, what is yours?</b></i></p>')+
      console.log('What\'s your name?');
    }
  },

  work: function () {
    return this.get('name') + ' is working as a ' + this.get('occupation');
  }
});

var person = new Person();

var output = document.getElementById('output');
var output2 = document.getElementById('output2');
person.set('age', -30, {validate: true});
person.set('name', '', {validate: true});
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

//tony.set('age', -47, {validate: true});

output2.innerHTML += '<br>My name is: ' + tony.get('name')+ '.';
output2.innerHTML += '<br>I am ' + tony.get('age')+ ' years old.';
output2.innerHTML += '<br>I work as a ' + tony.get('occupation')+ '.';
output2.innerHTML += '<br>' + tony.work() +'.'+ '<br>';
console.log(tony.toJSON());
