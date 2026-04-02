// script.js

// Grab an element by its ID
const myButton = document.getElementById('myBtn');

// When it's clicked, do something
myButton.addEventListener('click', function() {
  alert('You clicked me! 🎉');
});

// Change text on the page
document.getElementById('hero-title').textContent = 'Hello World!';
